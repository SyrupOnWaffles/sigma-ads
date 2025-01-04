<script>
    import {currentUser,pb} from "./pocketbase";
    
    function signOut(){
        pb.authStore.clear();
    }

</script>

<button class="btn btn-primary" on:click={signOut}>Sign Out</button>