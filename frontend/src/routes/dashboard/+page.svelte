<script>
    import {currentUser,pb} from "$lib/pocketbase";
    import { onMount } from "svelte";
    import Signout from "$lib/auth/Signout.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import MediumLayout from "$lib/components/MediumLayout.svelte";

    let impressions = []

    onMount(async() => {
      const resultList = await pb.collection('impression').getList(1, 50,);
      impressions = resultList.items;

    })
</script>

<!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/20MuVazoNMv6xjKPnRFOxG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
<!-- <iframe src="http://127.0.0.1:8090/embed/ad/aiy50308pjcxun0"  width="50%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
<Navbar></Navbar>
<MediumLayout>
  <h1 class="text-9xl font-bold text-center mb-8">Dashobard</h1>

  <h1 class="text-2xl font-bold mb-8">Impressions</h1>
  {#each impressions as impression (impression.id)}
    <div>
        <p>{impression.country}</p>
    </div>
  {/each}}
</MediumLayout>
