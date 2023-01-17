<template>
  <div>
    <button @click="getData">Get Data</button>
    <textarea v-model="response" :rows="20" :cols="50"></textarea>
  </div>
</template>

<script>
import axios from 'axios';
import AuthService from "@/service/AuthService";
import router from "@/router";

export default {
  beforeCreate() {
    if (!AuthService.isAuthenticated()) {
      router.push('/login')
    } else{
      // Get user roles from local storage
      const userRoles = JSON.parse(localStorage.getItem('userRoles'));
      // Check if user has necessary role for the route
      if (!userRoles.some(role => role === 'ROLE_ADMIN')) {
        // Redirect to 403 page
        router.push('/403');
      }
    }
  },
  data() {
    return {
      response: ''
    }
  },
  methods: {
    async getData() {
      try {
        const res = await axios.get('http://localhost:8081/api/agents/searchLog')
        this.response = res.data
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style>

</style>