<template >
  <div>
    <div class="cont px-5" >
      <div class="form-card mb-5">
        <h2  class="text-center mt-5 mb-4">Personal Information</h2>
        <input class="form-control mb-3" type="text" name="fname" placeholder="First Name" />
        <input class="form-control mb-3" type="text" name="lname" placeholder="Last Name" />
        <input class="form-control mb-3" type="text" name="phno" placeholder="Contact No." />
        <input class="form-control mb-3" type="text" name="phno_2" placeholder="Alternate Contact No." />
      </div>
      <button>Previous</button>
      <button>Next</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.cont{
     width: 80%;
     margin: auto;
 }
 button{
     background: white !important;
     color: black;
     border: 3px solid #0d3835 !important;
     padding: 5px 20px;
     margin-left: 10px;

 }
 button:hover{
     color: white !important;
     padding: 5px 20px ;
     border-radius: 5px;
     background: #0d3835 !important;

 }
</style>