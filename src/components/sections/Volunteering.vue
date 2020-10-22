<template>
  <div class="pa-0 ma-0" :style="'background-color:' + color">
    <v-container id="volunteering" fill-height fluid class="pa-0">
      <v-spacer/>
      <span :class="this.$isMobile ? 'display-1 text-center mt-6' : 'display-3'">Voluntary and Youth Work</span>
      <v-spacer/>
    </v-container>
    <div style="height: 100px"></div>
    <v-container fill-height fluid class="pa-0">
      <v-spacer/>
      <v-img
          src="@/assets/juleica.png"
          max-width="300"
          max-height="300"
          class="rounded-xl"
      ></v-img>
      <v-spacer/>
      <v-card flat color="transparent" :max-width="this.$isMobile ? '90%' : '35%'">
        <v-card-title class="display-2" v-if="!this.$isMobile">
          JuLeiCa
        </v-card-title>
        <v-card-text :class="this.$isMobile ?'title text-center mt-4 ml-4' : 'title'">
          In 2018 I attended the 2 week full time
          <a
              href="https://www.juleica.de/antrag-und-infos/information/qualifikation/"
              target="_blank"
              style="color:white; text-decoration: none;"
          >JuLeiCa training</a
          >
          and first aid course. I obtained the nationwide uniform ID called <a
            href="https://www.juleica.de/"
            target="_blank"
            style="color:white; text-decoration: none;"
        >JuLeiCa</a
        >.
        </v-card-text>
      </v-card>
      <v-spacer/>
      <v-spacer/>
    </v-container>
    <div style="height: 50px"></div>
    <v-divider/>
    <div style="height: 50px"></div>
    <v-container fill-height fluid class="pa-0">
      <v-spacer/>
      <v-img
          v-if="this.$isMobile"
          src="@/assets/kjg.png"
          max-width="300"
          max-height="400"
          class="rounded-lg "
      ></v-img>
      <v-spacer/>
      <v-card flat color="transparent" :max-width="this.$isMobile ? '90%' : '36%'">
        <v-card-title v-if="!this.$isMobile" class="display-2">
          KjG St. Peter und Paul
        </v-card-title>
        <v-card-text :class="this.$isMobile ?'title text-center mt-4 ml-4' : 'title'">
          Since 2016 I've been part of the local youth organization. We plan weekly activities for children from 8-15
          years over the year
          and go on an summer camp every year with about 50 children. The <a
            href="https://www.kath-geht.de/html/content/kjg_st_peter_und_paul9344.html"
            target="_blank"
            style="color:white; text-decoration: none;"
        >KjG St. Peter und Paul</a
        >
          is has about 35 leaders and over 200 registered children.
        </v-card-text>
      </v-card>
      <v-spacer/>
      <v-col>
        <v-img
            v-if="!this.$isMobile"
            src="@/assets/kjg.png"
            max-width="400"
            max-height="400"
            class="rounded-lg "
        ></v-img>
      </v-col>
      <v-spacer/>
      <v-spacer/>
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
