<script>
    import {currentUser,pb} from "$lib/pocketbase";
    import { onMount } from "svelte";
    import Signout from "$lib/auth/Signout.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import MediumLayout from "$lib/components/MediumLayout.svelte";

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
<!-- <iframe src="http://127.0.0.1:8090/embed/ad/aiy50308pjcxun0"  width="50%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
<Navbar></Navbar>
<MediumLayout>
  <h1 class="text-9xl font-bold text-center mb-8">Ads for the Indie Web</h1>

  <div class="text-center mb-4">
      <a href="/advertise" class="btn btn-lg rounded-full btn-primary px-12">Create An Ad</a>
      <a href="/host-ads" class="btn btn-lg rounded-full px-12">Host Ads</a>
  </div>
  
  <img class=" mb-4" src="https://picsum.photos/seed/picsum/1920/1080">
  <p class="mb-4">
    Nulla feugiat mauris a ligula ultrices maximus. Maecenas pellentesque, elit vel sagittis rutrum, leo neque sollicitudin elit, ac semper nulla ex in ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris interdum urna quis mauris auctor, sed efficitur nisi condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque at tempor metus. Vestibulum lacus lectus, hendrerit a tortor quis, commodo gravida velit. Sed eget tortor sit amet ligula efficitur aliquam. Donec sed lacus felis.
  </p>
</MediumLayout>
