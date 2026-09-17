export async function onRequest(context) {
  const gifUrl =
    "https://s5.ezgif.com/tmp/ezgif-5436dd200478d166.gif";

  const response = await fetch(gifUrl);

  if (!response.ok) {
    return new Response("GIF fetch failed", {
      status: 502,
    });
  }

  const data = await response.arrayBuffer();

  return new Response(data, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "public, max-age=86400",
      "Content-Disposition": "inline",
    },
  });
}

Folder structure:
