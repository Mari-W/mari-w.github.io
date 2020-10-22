<template>
  <v-app-bar app color="transparent" flat hide-on-scroll>
    <navigate v-if="!this.$isMobile"/>
    <v-spacer v-if="!this.$isMobile"></v-spacer>
    <contact />
    <v-spacer v-if="this.$isMobile"></v-spacer>
    <v-avatar v-if="this.$isMobile" class="mt-2">
      <v-img
          src="@/assets/picture.png"
      ></v-img>
    </v-avatar>
  </v-app-bar>
</template>
<script>
import Contact from "@/components/misc/Contact";
import Navigate from "@/components/misc/Navigate";

export default {
  components: { Navigate, Contact }
};
</script>
