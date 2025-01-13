<script>
    import {currentUser,pb} from "$lib/pocketbase";
  import { onMount } from "svelte";
    
    let title;
    let tagline;
    let site;
    let fileInput;
    let errorMessage;
    let successMessage;

    async function createAd(){
        try{
            const data = {
                "tagline": tagline,
                "user" : $currentUser.id,
                "active": false,
                "site": site,
                "title": title,
                "image" : fileInput[0],
                "maxImpressions": 0
            };
            const record = await pb.collection('ads').create(data);
            successMessage="Message Sent"
        } catch(err){
            errorMessage=err
        }
    }
</script>

<h1 class="text-2xl font-bold mb-4 text-center">Create Ad</h1>
<p class="text-success mb-2">{successMessage}</p>
<p class="text-error mb-2">{errorMessage}</p>
<form on:submit|preventDefault>
    <p></p>
<input required class="input input-bordered w-full mb-2" placeholder="Title (only you see this)"type="text"bind:value={title}/>
    <input required class="input input-bordered w-full mb-2" placeholder="Tagline (the viewer sees this)"type="text"bind:value={tagline}/>
    <input required class="input input-bordered w-full mb-2" placeholder="Link"type="url"bind:value={site}/>
    <input required type="file" id="fileInput" class="file-input file-input-bordered file-input-primary w-full mb-2 " bind:files={fileInput}/>
    <button class="btn btn-neutral w-full" on:click={createAd}>Send</button>
</form>
