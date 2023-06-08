import './index-36410280.js';

function GET(req) {
  req.params;
  return new Response(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
async function POST(req) {
  req.params;
  let { request } = req;
  await request.json();
  return new Response(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export { GET, POST };
//# sourceMappingURL=_server-5c9f84ad.js.map
