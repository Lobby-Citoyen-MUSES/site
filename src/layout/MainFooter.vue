<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://twitter.com/MusesCitoyen">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/MusesCitoyen/">
              Facebook
            </a>
          </li>
          <li>
            <a href="">
              Statuts
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, MUSES
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
