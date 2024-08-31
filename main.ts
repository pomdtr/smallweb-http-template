const handler = (_req: Request) => {
    return new Response("Hello from smallweb!", {
        headers: { "content-type": "text/plain" },
    });
};

export default {
    fetch: handler,
} satisfies Deno.ServeDefaultExport;
