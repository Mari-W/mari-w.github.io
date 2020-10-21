<template>
  <div class="ma-0 pa-0">
    <app-bar/>
    <div class="ma-0 pa-0">
      <div>
        <about :color="colors.about"/>
      </div>
      <div :style="'background-color: ' + colors.about">
        <wave :color="colors.projects" class="mb-n2"/>
        <projects :color="colors.projects"/>
      </div>
      <div :style="'background-color: ' + colors.projects" >
        <wave :color="colors.education" class="mb-n2"/>
        <education :color="colors.education"/>
      </div>
      <div :style="'background-color: ' + colors.education">
        <wave :color="colors.work" class="mb-n2"/>
        <work :color="colors.work"/>
      </div>
      <div :style="'background-color: ' + colors.work">
        <wave :color="colors.volunteering" class="mb-n2"/>
        <volunteering :color="colors.volunteering"/>
      </div>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Work from "@/components/sections/Work";
import Volunteering from "@/components/sections/Volunteering";
import Wave from "@/components/misc/Wave"
import AppBar from "@/components/misc/AppBar";
import AppFooter from "@/components/misc/AppFooter";

export default {
  name: "Home",
  components: {AppFooter, AppBar, Wave, Volunteering, Work, Education, Projects, About},
  data: () => ({
    colors: {
      about: "#546E7A",
      projects: "#78909C",
      education: "#546E7A",
      work: "#78909C",
      volunteering: "#546E7A"
    }
  }),
  mounted() {
    if (this.$route.params.section !== undefined) {
      if (this.$route.params.section.toLowerCase() === 'legal') {
        this.$router.push({name: "Legal"})
      } else {
        const scroll = require('vue-scrollto');
        scroll.scrollTo('#' + this.$route.params.section)
      }
    }
  }
};
</script>
