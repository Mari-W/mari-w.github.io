<template>
  <div class="pa-0 ma-0" :style="'background-color:' + color">
    <div style="height: 20px"></div>
    <v-container id="coding" fill-height fluid class="pa-0">
      <!--      <v-spacer/>-->
      <!--      <span :class="this.$isMobile ? 'display-1 text-center mt-6' : 'display-3'">coding</span>-->
      <v-spacer />
      <div style="height: 400px"></div>
      <div style="height: 50px"></div>
      <v-container fill-height fluid class="pa-0 mt-6">
        <v-spacer />
        <v-img
          v-if="this.$isMobile"
          src="@/assets/github.png"
          max-width="365"
          max-height="365"
          class="rounded-lg "
        ></v-img>
        <v-spacer />
        <v-card
          flat
          color="transparent"
          :max-width="this.$isMobile ? '95%' : '35%'"
        >
          <v-card-title class="display-2" v-if="!this.$isMobile">
            programming
          </v-card-title>
          <v-card-text
            :class="this.$isMobile ? 'title text-center mt-4' : 'title'"
          >
            I like programming in Kotlin, Python, Rust and other languages but in
            general I prefer coding in any strongly typed language that fits best. For a more
            detailed overview of what i've done so far checkout my totally
            outdated
            <a
              href="https://github.com/mari-w"
              target="_blank"
              style="color:white; text-decoration: none;"
              >GitHub</a
            >.
          </v-card-text>
        </v-card>
        <v-spacer />
        <v-img
          v-if="!this.$isMobile"
          src="@/assets/github.png"
          max-width="365"
          max-height="365"
          class="rounded-lg "
        ></v-img>
        <v-spacer />
        <v-spacer v-if="!this.$isMobile" />
      </v-container>
    </v-container>
    <div style="height: 60px"></div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: ["color"]
};
</script>

<style scoped></style>
