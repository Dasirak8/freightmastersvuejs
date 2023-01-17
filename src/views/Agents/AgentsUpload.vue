<template>
  <div class="agentsupload">
    <form method="POST" enctype="multipart/form-data" action="http://localhost:8081/upload">
      <div>
      <input type="file" ref="fileInput" @change="setFile"/>>
      <p>Drag your files here or click in this area.</p>
      <br>
        <button @click="uploadFile">Upload</button>
      </div>
    </form>
  </div>
</template>

<script>
import $ from 'jquery'
import AuthService from "@/service/AuthService";
import router from "@/router";
import axios from 'axios';

export default {
  name: "AgentsUpload",
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
  methods: {
    setFile(e) {
      this.file = e.target.files[0]
    },
    async uploadFile() {

      const formData = new FormData()
      formData.append('file', this.file)

      const options = {
        headers: {
          'Authorization': 'Bearer' + localStorage.getItem('accessToken')
        }}

      try {
        const res = await axios.post('http://localhost:8081/upload', formData, options)
        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }
  },
  mounted(){
    $(document).ready(function(){
      $('form input').change(function () {
        $('form p').text("You successfully selected a document.");
      });
    });
  }
}
</script>

<style lang="scss" scoped>
.agentsupload{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.9);
}

form{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  border: 4px dashed #fff;
}
form p{
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 170px;
  color: #ffffff;
  font-family: Arial;
}
form input{
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
}
form button{
  color: #fff;
  background: #16a085;
  border: none;
  width: 508px;
  height: 35px;
  margin-top: -20px;
  margin-left: -4px;
  border-radius: 4px;
  border-bottom: 4px solid #117A60;
  transition: all .2s ease;
  outline: none;
}
form button:hover{
  background: #149174;
  color: #0C5645;
}
form button:active{
  border:0;
}
</style>