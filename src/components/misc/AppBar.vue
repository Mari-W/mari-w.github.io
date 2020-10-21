<template>
  <v-app-bar app color="transparent" flat hide-on-scroll>
    <navigate/>
    <v-spacer></v-spacer>
    <contact/>
  </v-app-bar>
</template>
<script>
import Contact from "@/components/misc/Contact";
import Navigate from "@/components/misc/Navigate";

export default {
  components: {Navigate, Contact}
}
</script>
