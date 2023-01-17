<template>
  <div class="agentsupload">
    <form method="POST" enctype="multipart/form-data" action="http://localhost:8081/agentsupload">
      <input type="file" @change="uploadFile"/>
      <p id="formP">Drag your files here or click in this area.</p>
    </form>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from "axios";
import router from "@/router";
import AuthService from "@/service/AuthService";
export default {
  name: "agentsupload",
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
      file: null
    }
  },
  methods: {
    async uploadFile() {
      this.file = event.target.files[0]
      // make sure a file is selected
      if (!this.file) {
        return;
      }
      // create a new FormData object
      const formData = new FormData();
      // add the file to the form data
      formData.append('file', this.file);
      try {
        // send the file to the server
        const response = await axios.post('http://localhost:8081/api/agents/upload', formData);
        console.log(response);
        document.getElementById("formP").innerHTML = "File uploaded successfully";
        setTimeout(() => { router.push("/agents/search")}, 2500);
      } catch (error) {
        console.error(error);
        document.getElementById("formP").innerHTML = "File upload failed";
        setTimeout(() => { document.getElementById("formP").innerHTML = "Drag your files here or click in this area."; }, 5000);

      }
    }
  },
  mounted(){
    $(document).ready(function(){
      $('form input').change(function () {
        $('form p').text("Your documents is uploading, please wait!");
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
  line-height: 24px;
  color: #ffffff;
  font-family: Arial,sans-serif;
  align-items: center;
  justify-content: center;
  margin: 0;
  display: flex;
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