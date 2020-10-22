<template>
  <div class="pa-0 ma-0" :style="'background-color:' + color">
    <v-container id="education" fill-height fluid class="pa-0">
      <v-spacer />
      <span class="display-3">Studies and School Life</span>
      <v-spacer />
    </v-container>
    <div style="height: 100px"></div>
    <v-container fill-height fluid class="pa-0">
      <v-spacer />
      <v-spacer />
      <v-img
        src="@/assets/uni.png"
        transition
        max-width="300"
        max-height="300"
        class="rounded-xl"
      ></v-img>
      <v-spacer />
      <v-card flat color="transparent" max-width="36%">
        <v-card-title class="display-2">
          University of Freiburg
        </v-card-title>
        <v-card-text class="title">
          Currently I am doing my Bachelor of Science in Computer Science at
          <a
            href="https://www.tf.uni-freiburg.de/en/study-programs/computer-science/b-sc-computer-science"
            target="_blank"
            style="color:white; text-decoration: none;"
            >Albert-Ludwigs-University of Freiburg</a
          >. The University of Freiburg mainly focus on
          <a
            href="https://www.tf.uni-freiburg.de/en/study-programs/computer-science"
            target="_blank"
            style="color:white; text-decoration: none;"
            >studies related to robotics, maschine learning, algorithms and
            security</a
          >. I expect to finish my bachelors in 2022.
        </v-card-text>
      </v-card>
      <v-spacer />
      <v-spacer />
    </v-container>
    <div style="height: 50px"></div>
    <v-divider />
    <div style="height: 50px"></div>
    <v-container id="projects" fill-height fluid class="pa-0">
      <v-spacer />
      <v-spacer />
      <v-card flat color="transparent" max-width="37%">
        <v-card-title class="display-2">
          Primary and High School
        </v-card-title>
        <v-card-text class="title">
          I stated going to school at
          <a
            href="https://www.schneeburgschule.de/"
            target="_blank"
            style="color:white; text-decoration: none;"
            >Schneeburgschule</a
          >
          primary school. From there I went to
          <a
            href="https://www.thg-freiburg.de/"
            target="_blank"
            style="color:white; text-decoration: none;"
            >Theodor-Heuss-Gymnasium</a
          >
          high school and graduated in 2019. In my final year I took part in the
          <a
            href="https://freiburg-seminar.de/sia/"
            target="_blank"
            style="color:white; text-decoration: none;"
          >
            Student-Engineering-Academy</a
          >
          and passed exceptionally.
        </v-card-text>
      </v-card>
      <v-spacer />
      <v-col>
        <v-img
          src="@/assets/sia.png"
          transition
          max-width="200"
          max-height="75"
          class="rounded-lg mb-4"
        ></v-img>
        <v-img
          src="@/assets/thg.png"
          transition
          max-width="200"
          max-height="75"
          class="rounded-lg mb-4"
        ></v-img>
        <v-img
          src="@/assets/schneeburgschule.png"
          transition
          max-width="200"
          max-height="75"
          class="rounded-lg "
        ></v-img>
      </v-col>
      <v-spacer />
      <v-spacer />
    </v-container>
    <div style="height: 100px"></div>
  </div>
</template>

<script>
export default {
  name: "Education",
  props: ["color"]
};
</script>

<style scoped></style>
