<script>
    import {currentUser,pb} from "./pocketbase";
    import { goto } from "$app/navigation";
    import "bootstrap-icons/font/bootstrap-icons.css";

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

<div class="p-3 col">
    <h1><i class="bi bi-box-arrow-in-right"></i> Log In</h1>
    <p>{errorMessage}</p>
    <form on:submit|preventDefault>
        <div class="row mb-2">
            <div class="col">
                <button class="btn btn-primary w-100 text-center" on:click={loginWithGoogle}><i class="bi bi-google"></i></button>
            </div>
            <div class="col">
                <button class="btn btn-primary w-100 text-center" on:click={loginWithGithub}><i class="bi bi-github"></i></button>
            </div>
        </div>
        <input class="form-control mb-2" placeholder="Username"type="text"bind:value={username}/>
        <input class="form-control mb-2" placeholder="Password"type="password"bind:value={password}/>
        <button class="w-100 btn btn-primary" on:click={login}><i class="bi bi-box-arrow-in-right"></i> Login</button>
    </form>
</div>