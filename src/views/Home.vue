<template>
  <div class="Home">
    <menu class="Home-menu">
      <router-link to="/todo">ToDo List</router-link>
      <router-link to="/job">Find job</router-link>
    </menu>
    <router-view></router-view>
  </div>
</template>
