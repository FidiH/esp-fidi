
export function GET({ request }) {
    // Deteksi fetch: kalau user buka langsung di browser, request Header "sec-fetch-mode"
    const isBrowser = request.headers.get("sec-fetch-mode") === "navigate";

    if (isBrowser) {
        // Kalau dibuka langsung di browser, jangan kirim JSON
        return new Response("Halaman ini tidak mengirimkan data lewat cara biasa.", {
            status: 200,
            headers: {
                "content-type": "text/plain"
            }
        });
    }

    // Kalau di-fetch, baru kirim JSON
    return new Response(
        JSON.stringify({
            clue: "Akhirnya kamu mendengar. Temanku selalu salah soal orang.",
            next: "ganti path url /bingung ke /lihat-aku"
        }),
        {
            status: 200,
            headers: {
                "content-type": "application/json"
            }
        }
    );
}
