export async function GET(request: Request) {
  return new Response(JSON.stringify({
    message: `Hello from Deno! Current time is ${new Date().toISOString()}`
  }), {
    headers: { 'Content-Type': 'application/json' },
  })
}