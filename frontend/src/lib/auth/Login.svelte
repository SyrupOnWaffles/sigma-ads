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

<h1 class="text-2xl font-bold mb-4 text-center">Log In</h1>
<p class="text-error">{errorMessage}</p>
<div class="flex flex-row gap-5 mb-2">
    <div class="basis-1/2">
        <button class="btn btn-neutral w-full text-xl" on:click={loginWithGoogle}><i class="bi bi-google"></i></button>
    </div>
    <div class="basis-1/2">
        <button class="btn btn-neutral w-full text-xl" on:click={loginWithGithub}><i class="bi bi-github"></i></button>
    </div>
</div>
<div class="divider">or</div>
<form on:submit|preventDefault method="POST">
    <input type="text" name="login" autocomplete="email" class="input input-bordered w-full mb-2" placeholder="Username/Email" bind:value={username}/>
    <input type="password" name="password" autocomplete=current-password class="input input-bordered w-full mb-2" placeholder="Password" bind:value={password}/>
    <button class="btn btn-neutral w-full mb-4" on:click={login}>Login</button>
</form>
<p class="text-end"><a class="cursor-pointer" on:click="{forgotPasswordModal.showModal()}">Forgot Password?</a></p>
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