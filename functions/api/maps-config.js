// Server-side proxy for secure API key exposure
// This function runs on Cloudflare edge, not in browser

export async function onRequest(context) {
  // CORS headers for client-side fetch
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight OPTIONS request
  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders
    });
  }

  // Optional: Validate origin for additional security
  const origin = context.request.headers.get('Origin');
  const allowedOrigins = [
    'https://skhealth.pages.dev',
    'https://skhealth.github.io',
  ];

  // Allow all *.pages.dev preview deployments
  const isPreviewDeployment = origin?.includes('.pages.dev');
  const isAllowedOrigin = allowedOrigins.includes(origin);

  if (origin && !isAllowedOrigin && !isPreviewDeployment) {
    console.warn(`Blocked request from unauthorized origin: ${origin}`);
    return new Response('Forbidden', {
      status: 403,
      headers: corsHeaders
    });
  }

  // Return API key from environment variable
  // This key is stored securely in Cloudflare, not in code
  return Response.json({
    mapsApiKey: context.env.GOOGLE_API_KEY
  }, {
    headers: {
      ...corsHeaders,
      'Cache-Control': 'no-store, max-age=0', // Never cache API keys
    }
  });
}
