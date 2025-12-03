export async function GET(request: Request) {
  return Response.json({
    message: "Catch-all route",
    method: request.method,
    referrer: request.referrer,
    url: request.url,
  });
}
