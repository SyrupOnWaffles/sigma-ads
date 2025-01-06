<script>
    import {currentUser,pb} from "$lib/pocketbase";
    
    function signOut(){
        pb.authStore.clear();
    }

</script>

<a on:click={signOut}>Sign Out</a>