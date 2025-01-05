<script>
    import {currentUser,pb} from "./pocketbase";
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
            // console.log(err)
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

<div class="p-3 col">
    <h1><i class="bi bi-person-plus-fill"></i> Sign Up</h1>
    <p>{errorMessage}</p>
    <form on:submit|preventDefault>
        <input class="form-control mb-2" placeholder="Username"type="text"bind:value={username}/>
        <input class="form-control mb-2" placeholder="Email"type="email"bind:value={email}/>
        <input class="form-control mb-2" placeholder="Password"type="password"bind:value={password}/>
        <input class="form-control mb-2" placeholder="Confirm Password"type="password"bind:value={passwordConfirm}/>
        <button class="btn btn-primary w-100" on:click={signUp}><i class="bi bi-person-plus-fill"></i> Sign Up</button>
    </form>
</div>