<script>
  import {onMount} from "svelte"

  let teks
  onMount(() => {
  // teks = btoa("hello")
  
  teks = btoa(window.location.origin + "/cermati")
  })
</script>

<main>
  <h1 id="judul">
    Cari aku?...
  </h1>
  <p id="teks">
    Hai, tolong cari aku. Aku ingin curhat, tapi temanku sedikit menggila. Ia pergi jauh, begitu juga dengan aku. Aku mencarinya, tapi rasanya seperti tidak pernah menemukannya.
    Aku harap kamu mau mencari aku dan membantu menyelesaikan masalah ini. Tapi aku tidak percaya orang seperti kamu begitu saja… jadi aku butuh menguji mu dulu. Aku hanya punya ini ku harap kamu tau apa yang akan kamu lakukan.

  </p>

  <p id="clue">
    {teks}
  </p>
</main>

<style>
  main{
  padding: 10%;
  padding-top: 30%;
  }
  #judul{
  color: #df0000;
  font-family: 'HelpMe';
  }
  #teks{
  color: red;
  font-family: 'evil';
  }
  #clue{
  color: green;
  font-size: .7rem;
  }
</style>