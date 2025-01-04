<script>
    import {currentUser,pb} from "./pocketbase";
    
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
        }catch(err){
            errorMessage = err
        }
    }
</script>

<p>sign up to post a comment</p>
<p>{errorMessage}</p>
<form on:submit|preventDefault>
<input class="form-control" placeholder="Username"type="text"bind:value={username}/>
<input class="form-control" placeholder="Email"type="email"bind:value={email}/>
<input class="form-control" placeholder="Password"type="password"bind:value={password}/>
<input class="form-control" placeholder="Confirm Password"type="password"bind:value={passwordConfirm}/>
<button class="btn btn-primary" on:click={signUp}>Sign Up</button>
</form>