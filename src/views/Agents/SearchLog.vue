<template>
  <div>
    <button @click="getData">Get Data</button>
    <textarea v-model="response" :rows="20" :cols="50"></textarea>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      response: ''
    }
  },
  methods: {
    async getData() {
      try {
        const res = await axios.get('http://agents.freightmasters.ge/searchLog')
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