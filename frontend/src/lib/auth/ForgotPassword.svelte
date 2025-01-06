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

<h1 class="text-4xl mb-4"><i class="bi bi-envelope-fill"></i> Forgot Password</h1>
<p class="text-success mb-2">{successMessage}</p>
<p class="text-error mb-2">{errorMessage}</p>
<form on:submit|preventDefault>
    <p></p>
    <input class="input input-bordered w-full mb-2" placeholder="Email"type="email"bind:value={email}/>
    <button class="btn btn-primary w-full" on:click={resetPassword}><i class="bi bi-envelope-fill"></i> Send</button>
</form>