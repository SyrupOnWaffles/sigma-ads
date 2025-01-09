<script>
    import {currentUser,pb} from "$lib/pocketbase";
    import { onMount } from "svelte";
    import Signout from "$lib/auth/Signout.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import MediumLayout from "$lib/components/MediumLayout.svelte";

    onMount(async() => {
      const data = {
          "tagline": "test",
          "active": true,
          "site": "https://example.com",
          "title": "test",
          "maxImpressions": 0
      };

      const record = await pb.collection('ads').create(data);
    })
</script>

<!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/20MuVazoNMv6xjKPnRFOxG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
<!-- <iframe src="http://127.0.0.1:8090/embed/ad/aiy50308pjcxun0"  width="50%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
<Navbar></Navbar>
<MediumLayout>
  <h1 class="text-9xl font-bold text-center mb-8">Advertise</h1>

  <p class="mb-4">
  <span class="fs-2">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Suspendisse luctus, nibh nec blandit consequat, massa diam volutpat erat, sed cursus turpis neque aliquam sem. Morbi a velit massa. Vivamus vulputate ex a magna tristique, sit amet eleifend augue lacinia. Nunc vel felis ex. Suspendisse rhoncus malesuada ex non efficitur. Duis a tincidunt ipsum, mattis ullamcorper odio. Duis metus justo, dignissim sit amet nulla vel, dictum porttitor arcu. Donec at justo odio. Nam hendrerit nibh quis turpis sagittis, ut hendrerit dolor luctus. Aenean volutpat risus sed interdum egestas. Phasellus elit sem, auctor non magna nec, elementum tempus dolor. Duis tincidunt placerat ligula id elementum. Duis et magna vulputate, molestie tellus at, rhoncus mauris. Aliquam non accumsan urna, ac fringilla nulla. Proin finibus a est sit amet tempor.
  </p>
  <img class=" mb-4" src="https://picsum.photos/seed/bellairll/1920/1080">
</MediumLayout>
