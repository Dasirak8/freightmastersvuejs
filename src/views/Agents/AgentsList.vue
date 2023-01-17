<template>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css">

  <div class="agentslist">
    <a href="/agents/search" class="float" target="_blank">
      <i class="fa-solid fa-magnifying-glass my-float"></i>
    </a>
    <div style="margin-top: 16px">
      <table class="table table-striped mw-90">
        <thead>
        <tr>
          <th scope="col">Company Name</th>
          <th scope="col">Origin</th>
          <th scope="col">Contact Person</th>
          <th scope="col">Phone</th>
          <th scope="col">Mail</th>
          <th scope="col">Comments</th>
        </tr>
        </thead>
        <tbody>
        <tr style="width: 100%" v-for="agent in agentList" v-bind:key="agent.id">
          <td style="width: 16%">{{ agent.companyName }}</td>
          <td style="width: 16%">{{ agent.origin }}</td>
          <td style="width: 16%">{{ agent.contactPerson }}</td>
          <td style="width: 16%"><a :href="'tel:' + agent.phone">{{ agent.phone }}</a></td>
          <td style="width: 18%"><a :href="'mailto:' + agent.mail">{{ agent.mail }}</a></td>
          <td style="width: 18%">{{ agent.comment?.name }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AgentsList",
  data() {
    return {
      agentList: []
    }
  },
  async created() {
    try {
      await axios.get('http://localhost:8081/api/agents-by-params?params=' + this.$route.query.params)
          .then(response => {
            this.agentList = response.data
          })


    } catch (error) {
      this.$router.push('/agents/search')
    }
  },
}
</script>

<style lang="scss" scoped>
.agents-list{
  padding: 16px 16px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

.float{
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#F4B942;
  color:#EFE9F4;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  box-shadow: 2px 2px 3px #999;
  z-index:100;
}

.my-float{
  margin-top:16px;
}


</style>