<template>
<div class="ma-0 pa-0">
  <v-btn
      text
      v-scroll-to="'#about'"
  >
    <span class="mr-2">About</span>
  </v-btn>

  <v-btn
      text
      v-scroll-to="'#projects'"
  >
    <span class="mr-2">Projects</span>
  </v-btn>

  <v-btn
      text
      v-scroll-to="'#education'"
  >
    <span class="mr-2">Education</span>
  </v-btn>

  <v-btn
      text
      v-scroll-to="'#work'"
  >
    <span class="mr-2">Work</span>
  </v-btn>
  <v-btn
      text
      v-scroll-to="'#volunteering'"
  >
    <span class="mr-2">Volunteering</span>
  </v-btn>
</div>
</template>

<script>
export default {
  name: "Navigate"
}
</script>

<style scoped>

</style>
