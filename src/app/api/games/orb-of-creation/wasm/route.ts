const WASM_PATH = '/games/orb-of-creation/Build/v0.5.0%20WebGL.wasm.gz';
const WASM_SIZE_BYTES = 7_467_042;

function wasmHeaders() {
  return {
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Content-Encoding': 'gzip',
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

  return new Response(response.body, { headers: wasmHeaders() });
}
