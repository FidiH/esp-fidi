<script>
    let msg1 = "Kamu akhirnya menemukanku.";
    let msg2 = "Atau mungkin kamu menemukan dirimu sendiri.";
    let msg3 = "Aku tidak benar benar hilang.";
    let msg4 = "Aku cuma berhenti bicara karena tidak ada yang mendengar.";

    if (typeof window !== "undefined") {
        // Teks perlahan memudar satu per satu
        setTimeout(() => msg4 = "", 4000);
        setTimeout(() => msg3 = "", 7000);
        setTimeout(() => msg2 = "", 10000);
        setTimeout(() => msg1 = "… kamu pergi?", 13000);

        // Jika user mencoba pergi
        const redirect = () => window.location.href = "/selesai";

        // Event meninggalkan tab
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                msg1 = "Tunggu…";
                msg2 = "Jangan tinggalkan aku.";
                setTimeout(redirect, 800);
            }
        });

        // Event klik ke luar jendela
        window.addEventListener("blur", () => {
            msg1 = "Kamu benar benar mau pergi?";
            setTimeout(redirect, 1200);
        });
    }
</script>

<style>
    .room {
        font-family: 'HelpMe';
        color: #ddd;
        background: #000;
        height: 100vh;
        padding: 60px;
        display: flex;
        color: red;
        flex-direction: column;
        gap: 20px;
        line-height: 1.7;
        font-size: 1.2rem;
    }

    p {
        transition: opacity 1.5s ease;
    }

    .fade {
        opacity: 0;
    }

    /* Efek "bisikan" kecil di background */
    body {
        background-image:
            repeating-linear-gradient(
                0deg,
                rgba(255,255,255,0.02) 0,
                rgba(255,255,255,0.02) 1px,
                transparent 1px,
                transparent 3px
            );
    }
</style>

<div class="room">
    <p class={msg1 === "" ? "fade" : ""}>{msg1}</p>
    <p class={msg2 === "" ? "fade" : ""}>{msg2}</p>
    <p class={msg3 === "" ? "fade" : ""}>{msg3}</p>
    <p class={msg4 === "" ? "fade" : ""}>{msg4}</p>

    <p>
        fidi - i dont know
    </p>
</div>
