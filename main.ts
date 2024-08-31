export default {
    fetch: () => {
        return new Response("Hello from smallweb!", {
            headers: { "content-type": "text/plain" },
        });
    },
} satisfies Deno.ServeDefaultExport;
