<template>
  <div class="wrapper board">
  </div>
</template>


<script>
import security from "../security";

export default {
  name: "signout",
  data() {
    
  },
  beforeRouteEnter (to, from, next) {
      security.empty();
      next('/connexion');
  },
};
</script>

<style lang="scss">
.alert {
  box-shadow: 0 none;
  margin-bottom: 0;
  border-radius: 0;
}

.alert.alert-info {
  border-radius: 0;
}
</style>
