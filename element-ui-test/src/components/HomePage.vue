<template>
  <div id="HomePage">
    {{message}}
  </div>
</template>
<script type="text/javascript">
  export default{
    name: "HomePage",
    data(){
      return{
        message:"This is Home Page!"
      }
    }
  }
</script>
<style type="text/css">
  #HomePage{
    color: green;
    font-size: 28px;
  }
</style>
