<script>
    import {currentUser,pb} from "$lib/pocketbase";
    
    let email;
    let errorMessage;
    let successMessage;

    async function resetPassword(){
        try{
        await pb.collection('users').requestPasswordReset(email);
        successMessage="Message Sent"
        } catch(err){
            errorMessage=err
        }
    }

</script>

<h1 class="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
<p class="text-success mb-2">{successMessage}</p>
<p class="text-error mb-2">{errorMessage}</p>
<form on:submit|preventDefault>
    <p></p>
    <input autocomplete="email" class="input input-bordered w-full mb-2" placeholder="Email"type="email"bind:value={email}/>
    <button class="btn btn-neutral w-full" on:click={resetPassword}>Send</button>
</form>
