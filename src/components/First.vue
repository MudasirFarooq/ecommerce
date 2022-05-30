<template >
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 pt-5 mt-5">
            <h2><b>Zay</b> eCommerce</h2>
            <h4>Tiny and perfect E-comerce templates</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Providt architecto illum vitae, cum illo odit <b> placeat? Laboriosam,</b>
                 error voluptas  <b> placeat? Laboriosam,</b> nobis amet omnis quis aliquid illo <b> modi facilis!</b>
            </p>
            <router-link class="btn btn-primary" to="/products"> Show All Products</router-link>

        </div>
        <div class="col-6">
          <img
          class="w-100"
            src="https://img.freepik.com/free-vector/trolley-with-chart-marketing-logo-design-vector-graphic-symbol-icon-sign-illustration-creative-idea_15473-9849.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"First"
};
</script>
<style scoped>
b, h2{
    color: #167239;

}
h4 , p , h2{
    margin-left: 100px;
}
h2{
    margin-top: 150px;

}
a{

  background: #167239 !important;
  border: none !important;
      margin-left: 100px;

}
</style>