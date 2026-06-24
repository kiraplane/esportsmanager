const DATA_CHUNKS = [
  'orb-data-000.bin',
  'orb-data-001.bin',
  'orb-data-002.bin',
  'orb-data-003.bin',
] as const;

const DATA_SIZE_BYTES = 83_526_281;
const CHUNK_BASE_PATH = '/games/orb-of-creation/Build/data';

function headers() {
  return {
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Content-Length': String(DATA_SIZE_BYTES),
    'Content-Type': 'application/octet-stream',
  };
}

export function HEAD() {
  return new Response(null, { headers: headers() });
}

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for (const chunk of DATA_CHUNKS) {
          const chunkUrl = `${origin}${CHUNK_BASE_PATH}/${chunk}`;
          const response = await fetch(chunkUrl);

          if (!response.ok || !response.body) {
            throw new Error(`Unable to load Orb data chunk: ${chunk}`);
          }

          const reader = response.body.getReader();

          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            if (value) {
              controller.enqueue(value);
            }
          }
        }

        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return new Response(stream, { headers: headers() });
}
