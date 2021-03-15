<template>
  <div class="ma-0 pa-0">
    <v-btn text v-scroll-to="'#about'">
      <span class="mr-2">About</span>
    </v-btn>

    <v-btn text v-scroll-to="'#coding'">
      <span class="mr-2">Coding</span>
    </v-btn>

    <v-btn text v-scroll-to="'#studies'">
      <span class="mr-2">Studies</span>
    </v-btn>

    <!--    <v-btn text v-scroll-to="'#work'">
      <span class="mr-2">Work</span>
    </v-btn>
    <v-btn text v-scroll-to="'#volunteering'">
      <span class="mr-2">Volunteering</span>
    </v-btn>-->
  </div>
</template>

<script>
export default {
  name: "Navigate"
};
</script>

<style scoped></style>
