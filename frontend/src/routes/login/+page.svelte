<script>
  import Login from "$lib/auth/Login.svelte";
  import Signup from "$lib/auth/Signup.svelte";
  import MediumLayout from "$lib/components/MediumLayout.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>
<Navbar></Navbar>
<MediumLayout>
  <div class="mt-32 flex flex-row">
    <div class="basis-1/2">
      <div class="max-w-sm mx-auto shadow-xl h-full rounded-lg p-8">
          <Login></Login>
      </div> 
    </div> 
    <div class="basis-1/2">
      <div class="max-w-sm mx-auto shadow-xl h-full rounded-lg p-8">
        <Signup></Signup>
      </div> 
    </div> 
  </div> 
</MediumLayout>