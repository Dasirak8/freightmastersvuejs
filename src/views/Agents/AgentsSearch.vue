<template>
  <div class="agentsSearch">
    <div class="cntr">
      <div class="cntr-innr">
        <label style="margin-bottom: 32px" class="search" for="inpt_search">
          <input name="searchParams" id="inpt_search" type="text"/>
        </label><br>
        <button class="button submit_search" id="submitBtn">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/service/AuthService";
import $ from 'jquery'
import router from "@/router/index";

export default {
  name: "AgentsSearch",
  beforeCreate() {
    if (!AuthService.isAuthenticated()) {
      router.push('/login')
    } else{
      // Get user roles from local storage
      const userRoles = JSON.parse(localStorage.getItem('userRoles'));
      // Check if user has necessary role for the route
      if (!userRoles.some(role => role === 'ROLE_ADMIN' || 'ROLE_MANAGER' || 'ROLE_OPERATOR' || 'ROLE_FINANCE')) {
        // Redirect to 403 page
        router.push('/403');
      }
    }
  },
  mounted () {

    $("#inpt_search")
        .on('focus', function () {
      $(this).parent('label').addClass('active');
    })
        .on('blur', function () {
          if($(this).val().length === 0)
            $(this).parent('label').removeClass('active');
        });

    /// On submit
    $(".submit_search").on('click', function () {
      let searchString = $("#inpt_search").val();
      window.location.replace("/agents/list?params=" + searchString);


    });


    let input = document.getElementById("inpt_search");
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn").click();
      }
    });
  }
}
</script>

<style lang="scss" scoped>
/*** COLORS ***/
/*** DEMO ***/
.agentsSearch{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #F4B942;
  font: 13px monospace;
  color: #232e57;
  max-height: 100%;
  height: 100%;
}
html,body {

}
p {
  margin-top: 30px;
}
.cntr {
  display: table;
  width: 100%;
  height: 100%;
}
.cntr .cntr-innr {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
/*** STYLES ***/
.search {

  display: inline-block;
  position: relative;
  height: 35px;
  width: 35px;
  box-sizing: border-box;
  margin: 0 8px 7px 0;
  padding: 7px 9px 0 9px;
  border: 3px solid #232e57;
  border-radius: 25px;
  transition: all 300ms ease;
  cursor: text;
}
.search:after {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  right: -5px;
  top: 21px;
  background: #232e57;
  border-radius: 3px;
  transform: rotate(-45deg);
  transition: all 300ms ease;
}
.search.active,
.search:hover {
  width: 300px;
  margin-right: 0;
}
.search.active:after,
.search:hover:after {
  height: 0;
}
.search input {
  width: 100%;
  border: none;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: inherit;
  background: transparent;
  outline-width: 0;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  line-height: revert;
}

::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder {
  text-align: center;
}

.button {
  width: 180px;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.button:hover {
  background-color: #232e57;
  box-shadow: 0 15px 20px #0f152b66;
  color: #fff;
  transform: translateY(-7px);
}

input {
  border:none;
  outline:none;
}

input:focus {
  border: none;
  outline:none;
}
</style>