<template>
  <div class="pa-0 ma-0" :style="'background-color:' + color">
    <v-container id="work" fill-height fluid class="pa-0">
      <v-spacer />
      <span class="display-3">Voluntary and Youth Work</span>
      <v-spacer />
    </v-container>
    <div style="height: 100px"></div>
    <v-container fill-height fluid class="pa-0">
      <v-spacer />
      <v-spacer />
      <v-img
        src="@/assets/juleica.png"
        transition
        max-width="400"
        max-height="300"
        class="rounded-xl"
      ></v-img>
      <v-spacer />
      <v-card flat color="transparent" max-width="35%">
        <v-card-title class="display-2">
          JuLeiCa
        </v-card-title>
        <v-card-text class="title">
          In 2019 I attended the 2 week full time
          <a
            href="https://www.juleica.de/antrag-und-infos/information/qualifikation/"
            target="_blank"
            style="color:white; text-decoration: none;"
            >JuLeiCa training</a
          >
          and first aid course to obtain the nationwide uniform ID.
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
      <v-card flat color="transparent" max-width="36%">
        <v-card-title class="display-2">
          KjG St. Peter und Paul
        </v-card-title>
        <v-card-text class="title">
          Since 2016 I've been part of the local youth organization in my
          neighborhood. We do plan many activities for children from 8-15 years
          and go on an summer camp every year with about 50 children. The<a
            href="https://www.kath-geht.de/html/content/kjg_st_peter_und_paul9344.html"
            target="_blank"
            style="color:white; text-decoration: none;"
            >KjG St. Peter und Paul</a
          >
          is run by our catholic church parish.
        </v-card-text>
      </v-card>
      <v-spacer />
      <v-col>
        <v-img
          src="@/assets/kjg.png"
          transition
          max-width="400"
          max-height="400"
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
  name: "Volunteering",
  props: ["color"]
};
</script>

<style scoped></style>
