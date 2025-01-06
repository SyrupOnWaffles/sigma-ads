<script>
    import {currentUser,pb} from "$lib/pocketbase";
    import Signout from "$lib/auth/Signout.svelte";
    import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<div class="navbar px-16 bg-base-100">
    <div class="navbar-start">
      <ul class="menu menu-horizontal px-1">
        <li><a class="btn btn-ghost">Home</a></li>
        <li><a class="btn btn-ghost">Dashboard</a></li>
        <li><a class="btn btn-ghost">Create Ad</a></li>
      </ul>
    </div>
    <div class="navbar-center">
      <a href="/" class="btn btn-ghost"><img width="150px" src="title.gif"></a>
      
    </div>
    <div class="navbar-end">
      {#if $currentUser}
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost">
            <i class="bi bi-person text-2xl"></i>{$currentUser.username}
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Account</a></li>
            <li><Signout></Signout></li>
          </ul>
        </div>
      {:else}
        <a class="btn btn-ghost btn-circle" href="/login"><i class="bi bi-person text-2xl"></i></a>
      {/if}
    </div>
  </div>