const WASM_PATH = '/games/orb-of-creation/Build/v0.5.0%20WebGL.wasm.gz';
const WASM_SIZE_BYTES = 27_607_449;

function wasmHeaders() {
  return {
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Content-Length': String(WASM_SIZE_BYTES),
    'Content-Type': 'application/wasm',
  };
}

export function HEAD() {
  return new Response(null, { headers: wasmHeaders() });
}

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const response = await fetch(`${origin}${WASM_PATH}`, {
    headers: {
      'Accept-Encoding': 'identity',
    },
  });

  if (!response.ok || !response.body) {
    return new Response('Unable to load Orb of Creation WebAssembly.', {
      status: 502,
    });
  }

  if (typeof DecompressionStream === 'undefined') {
    return new Response('This runtime cannot decompress Orb WebAssembly.', {
      status: 500,
    });
  }

  const decompressedBody = response.body.pipeThrough(
    new DecompressionStream('gzip')
  );

  return new Response(decompressedBody, { headers: wasmHeaders() });
}
