<template>
  <div class="home">
    <First/>
  </div>
</template>

<script>
// @ is an alias to /src
import First from "../components/First.vue"

export default {
  name: "Home",
  components: {
    First
  },
};
</script>
