<template >
  <div>
    <div class="cont p-5 shadow">
      <div class="form-card">
        <h2 class="fs-title text-center">Success !</h2>
        <br />
        <div class="row justify-content-center">
          <div class="d-flex  justify-content-center">
            <img
              src="https://img.icons8.com/color/96/000000/ok--v2.png"
              class="fit-image"
            />
          </div>
        </div>
        <br />
        <div class="row justify-content-center">
          <div class="col-7 text-center">
            <h5> Successfully Done </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5">
      <router-link class="link-success pclas" to="/about"><b class="hhhh">&#8592;</b> Continue Shoping</router-link>
      </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.cont{
    width: 50%;
    margin: auto;
    margin-top: 50px;
}
.pclas{
     cursor: pointer;
    text-decoration: none;

 }
</style>