<script>
    import {currentUser,pb} from "../lib/pocketbase";
    import { onMount } from "svelte";
    import Signout from "$lib/Signout.svelte";
    
    onMount(async() => {
      const resultList = await pb.collection('impression').getList(1, 50,);      
      console.log(resultList)
      
      // const data = {
      //     "country": "CA",
      //     "ad": "tf71wnt0mi415bu"
      // };

      // const record = await pb.collection('impression').create(data);
    })
</script>

<!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/20MuVazoNMv6xjKPnRFOxG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
<iframe src="http://127.0.0.1:8090/embed/ad/aiy50308pjcxun0"  width="50%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2nZPwKpV75BQpn9snGy2xG?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
{#if $currentUser}
        <p>signed in as {$currentUser.username}</p>
        <Signout></Signout>
{:else}
  <p>Not logged in. <a href="/login">login</a></p>
{/if}