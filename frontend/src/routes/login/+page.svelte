<script>
  import {currentUser,pb} from "$lib/pocketbase";
  import { onMount } from "svelte";
  import Login from "$lib/auth/Login.svelte";
  import Signup from "$lib/auth/Signup.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import MediumLayout from "$lib/components/MediumLayout.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  onMount(async() => {
    console.log(await pb.collection('users').listAuthMethods())
    })
</script>
<Navbar/>
<MediumLayout>
  <div class="flex h-full justify-center mt-auto flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-center">
      <div class="max-w-sm rounded-lg p-8">
        <div class="h-96">
          <Login></Login>
        </div> 
      </div> 
    </div>
    <div class="md:w-1/2 text-center">
      <div class="max-w-sm rounded-lg p-8">
        <div class="h-96">
          <Signup></Signup>
        </div>
      </div> 
    </div>
  </div>
</MediumLayout>
<Footer/>