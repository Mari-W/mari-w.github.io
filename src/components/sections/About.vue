<template>
  <div class="pa-0 ma-0" style="min-height: 780px">
    <div :style="this.$isMobile ? 'height: 50px' : 'height: 100px'"></div>
    <v-container id="about" fill-height fluid class="pa-0">
      <v-spacer/>
      <v-img
          src="@/assets/picture.png"
          max-width="320"
          class="rounded-xl ml-xl-12"
          v-if="!this.$isMobile"
      ></v-img>
      <v-spacer v-if="!this.$isMobile"/>
      <v-card flat color="transparent" :max-width="this.$isMobile ? '90%' : '45%'"
              :class="this.$isMobile ? 'text-center' : ''">
        <v-card-title :class="this.$isMobile ? 'justify-center' : 'display-2'">
          This Is Me
        </v-card-title>
        <v-card-text class="title">
          I'm a Software Engineer studying Computer Science in Germany. My
          passion is to write backend services but I also like doing design and
          frontend.
          Besides sitting in front of my computer I do play soccer and volunteer
          as youth worker.
        </v-card-text>
        <v-row>
          <v-col :style="this.$isMobile ? 'min-width: 60%' : ''">
            <v-divider v-if="languages"/>
            <v-card-subtitle :class="this.$isMobile ? 'subtitle-1 white--text' : 'headline white--text'">
              <v-btn icon class="ml-n1" @click="languages = !languages">
                <v-icon>{{
                    languages ? "mdi-arrow-up" : "mdi-arrow-down"
                  }}
                </v-icon>
              </v-btn>
              Programming Languages
            </v-card-subtitle>
            <v-divider v-if="languages"/>
            <v-card-text class="title" v-if="languages">
              <strong
              >- Kotlin <br/>
                - Python <br/>
                - Java/Type -Script</strong
              >
              <br/>
              - Dart <br/>
              - C#
              - Java <br/>
            </v-card-text>
          </v-col>
          <v-divider vertical class="mt-2" v-if="frameworks && languages && !this.$isMobile"/>
          <v-col :style="this.$isMobile ? 'min-width: 60%' : ''">
            <v-divider v-if="frameworks"/>
            <v-card-subtitle :class="this.$isMobile ? 'subtitle-1 white--text' : 'headline white--text'">
              <v-btn icon class="ml-n1" @click="frameworks = !frameworks">
                <v-icon>{{
                    frameworks ? "mdi-arrow-up" : "mdi-arrow-down"
                  }}
                </v-icon>
              </v-btn>
              Frameworks and Tools
            </v-card-subtitle>
            <v-divider v-if="frameworks"/>
            <v-card-text class="title" v-if="frameworks">
              <strong
              >- Ktor <br/>
                - VueJS <br/>
                - Flutter <br/>
                - MongoDB <br/>
                - MySQL
              </strong>
              <br/>
              - Tensorflow <br/>
              - Selenium <br/>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <v-spacer/>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "About",
  props: ["color"],
  data: () => ({
    languages: false,
    frameworks: false
  }),
  mounted() {
    if (this.$route.params.section !== undefined) {
      if (this.$route.params.section.toLowerCase() === "extend") {
        this.languages = true;
        this.frameworks = true;
      }
    }
  }
};
</script>

<style scoped></style>
