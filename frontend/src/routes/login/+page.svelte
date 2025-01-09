<script>
  import Login from "$lib/auth/Login.svelte";
  import Signup from "$lib/auth/Signup.svelte";
  import MediumLayout from "$lib/components/MediumLayout.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>
<Navbar></Navbar>
<MediumLayout>
  <div class="flex flex-col md:flex-row h-full">
    <div class="md:w-1/2 text-center">
      <div class="max-w-sm mx-auto my-auto rounded-lg p-8">
          <Login></Login>
      </div> 
    </div>
    <div class="md:w-1/2 text-center">
      <div class="max-w-sm mx-auto my-auto rounded-lg p-8">
        <Signup></Signup>
      </div> 
    </div>
  </div>
</MediumLayout>