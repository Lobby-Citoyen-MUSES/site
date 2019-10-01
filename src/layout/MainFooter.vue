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
            <a target="_blank" href="https://twitter.com/MusesCitoyen">
              Twitter
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/MusesCitoyen/">
              Facebook
            </a>
          </li>
          <li>
            <a href="/mentions-legales">
              Statuts & Mentions légales
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:contact@muses-lobby-citoyen.org">
              Contact
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
