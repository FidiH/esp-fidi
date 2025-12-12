
<script>
  
  import {onMount} from "svelte"
  let teks
  onMount(() => {
    teks = window.location.href
  })
  
</script>

<main>

  <!-- kamu tidak akan menemukanku dari tampilan ini -->
  <!-- dengar responku, bukan wajahku -->

  <h1>Kata temanku</h1>
  <p>
    Kamu belum mengenalku, tapi kamu tetap melanjutkan.
    Aku tidak tahu apakah itu keberanian atau cuma rasa penasaran yang bodoh.
    Tapi… terima kasih sudah mencoba.

    Temanku pernah bilang,
    "Semua orang butuh seseorang yang benar benar mendengar."

    Pertanyaannya… apakah kamu bisa mendengar dengan baik?
    Atau kamu cuma membaca yang ada di depan mata?
  </p>

  <p>
    Aku bicara lewat tempat yang tidak kamu lihat.
    Kalau kamu benar benar pendengar yang baik,
    coba cari aku dari methode lain.
  </p>

<p>{teks}</p>
</main>

<style>
  main{
  color: red;
  font-family: evil;
  }
</style>