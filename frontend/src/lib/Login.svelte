<script>
    import {currentUser,pb} from "./pocketbase";
    import { redirect } from "@sveltejs/kit";

    let username;
    let password;
    let errorMessage="";

    async function loginWithGoogle() {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
    }

    async function loginWithGithub() {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'github' });
    }

    async function login(){
        try{
            await pb.collection('users').authWithPassword(username,password);
        }catch(err){
            errorMessage = err
        }
    }
    function signOut(){
        pb.authStore.clear();
    }

</script>

<p>sign up to post a comment</p>
<p>{errorMessage}</p>
<form on:submit|preventDefault>
    <input class="form-control" placeholder="Username"type="text"bind:value={username}/>
    <input class="form-control" placeholder="Password"type="password"bind:value={password}/>
    <button class="btn btn-primary" on:click={login}>Login</button>
    
    <button class="btn btn-primary" on:click={loginWithGoogle}>Login With Google</button>
    <button class="btn btn-primary" on:click={loginWithGithub}>Login With Github</button>
</form>