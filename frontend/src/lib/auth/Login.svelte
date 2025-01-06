<script>
    import {currentUser,pb} from "$lib/pocketbase";
    import { goto } from "$app/navigation";
    import "bootstrap-icons/font/bootstrap-icons.css";
    import ForgotPassword from "./ForgotPassword.svelte";

    let username;
    let password;
    let errorMessage="";

    async function loginWithGoogle() {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
        goto("/")
    }

    async function loginWithGithub() {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'github' });
        goto("/")
    }

    async function login(){
        try{
            await pb.collection('users').authWithPassword(username,password);
            goto("/")
        }catch(err){
            errorMessage = err
        }
    }
    function signOut(){
        pb.authStore.clear();
    }

</script>

<h1 class="text-4xl mb-4"><i class="bi bi-box-arrow-in-right"></i> Log In</h1>
<p class="text-error">{errorMessage}</p>
<div class="flex flex-row gap-5 mb-2">
    <div class="basis-1/2">
        <button class="btn btn-primary w-full text-xl" on:click={loginWithGoogle}><i class="bi bi-google"></i></button>
    </div>
    <div class="basis-1/2">
        <button class="btn btn-primary w-full text-xl" on:click={loginWithGithub}><i class="bi bi-github"></i></button>
    </div>
</div>
<div class="divider">or</div>
<form on:submit|preventDefault>
<input autocomplete="username" class="input input-bordered w-full mb-2"  placeholder="Username/Email" bind:value={username}/>
<input autocomplete="current-password" class="input input-bordered w-full mb-2" placeholder="Password"type="password"bind:value={password}/>
<button class="btn btn-primary w-full mb-4" on:click={login}><i class="bi bi-box-arrow-in-right"></i> Login</button>

</form>
<p class="text-end" on:click="{forgotPasswordModal.showModal()}">Forgot Password?</p>
<dialog id="forgotPasswordModal" class="modal">
    <div class="modal-box">
        <div class="p-3">
            <ForgotPassword></ForgotPassword>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>

