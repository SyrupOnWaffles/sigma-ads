<script>
    import {currentUser,pb} from "$lib/pocketbase";
    import Signout from "$lib/auth/Signout.svelte";
    import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<div class="navbar lg:px-16 bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a class="btn btn-ghost">Home</a></li>
            <li><a class="btn btn-ghost">Dashboard</a></li>
            <li><a class="btn btn-ghost">Create Ad</a></li>
          </ul>
        </div>
      <ul class="hidden lg:flex menu menu-horizontal px-1">
        <li><a class="btn btn-ghost">Home</a></li>
        <li><a class="btn btn-ghost">Dashboard</a></li>
        <li><a class="btn btn-ghost">Create Ad</a></li>
      </ul>
    </div>
    <div class="navbar-center ">
      <a href="/" class="btn btn-ghost"><img class="invert" width="150px" src="title.gif"></a>
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