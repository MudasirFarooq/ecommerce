<template >
  <div>
    <div class="cont p-5">
      <div class="form-card px-5 mb-4">
        <h2 class="text-center mb-3">Payment Information</h2>
        <div class="d-flex justify-content-center mx-5">
          <div class="shadow" data-value="credit">
            <img
              src="https://i.imgur.com/XzOzVHZ.jpg"
              width="200px"
              height="100px"
            />
          </div>
          <div class="shadow" data-value="paypal">
            <img
              src="https://i.imgur.com/jXjwZlj.jpg"
              width="200px"
              height="100px"
            />
          </div>
          <br />
        </div>
        <div class="form-floating my-3 mx-5 ">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Card Number*</label>
            </div>
          <div class="form-floating mb-3 mx-5">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Card Number*</label>
            </div>
        <div class="row">
          <label class="mx-5 my-2">Expiry Date*</label>
          <div class="mx-5">
            
            <input type="date" class="form-control" style="width:88%">
          </div>
        </div>
      </div>
      <button style="margin-left:95px">Previous</button>
      <button>Next</button>
    
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
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
 input:focus{
     outline: none !important;
 }
 .cont{
     width: 80%;
     margin: auto;
 }

</style>