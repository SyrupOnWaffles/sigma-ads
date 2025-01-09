<script>
    import {currentUser,pb} from "$lib/pocketbase";
    import { goto } from "$app/navigation";
    
    let username;
    let email;
    let password;
    let passwordConfirm;
    let errorMessage="";

    async function signUp(){
        try{
            const data = {
                username,
                email,
                password,
                passwordConfirm,
            }
            const createdUser = await pb.collection('users').create(data);
            await login()
        } catch(err){
            errorMessage=err
        }

    }
    async function login(){
        try{
            await pb.collection('users').authWithPassword(username,password);
            goto("/")
        }catch(err){
            errorMessage = err
        }
    }
</script>

<h1 class="text-2xl font-bold mb-4 text-center">Sign Up</h1>
<p class="text-error">{errorMessage}</p>
<form on:submit|preventDefault method="POST">
    <input type="text" name="username" autocomplete="username" class="input input-bordered w-full mb-2" placeholder="Username" bind:value={username}/>
    <input type="email" name="email" autocomplete="" class="input input-bordered w-full mb-2" placeholder="Email" bind:value={email}/>
    <input type="password" name="password1" autocomplete="new-password" class="input input-bordered w-full mb-2" placeholder="Password" bind:value={password}/>
    <input type="password" name="password2" autocomplete="new-password" class="input input-bordered w-full mb-2" placeholder="Confirm Password" bind:value={passwordConfirm}/>
    <button class="btn btn-neutral w-full" on:click={signUp}>Sign Up</button>
</form>