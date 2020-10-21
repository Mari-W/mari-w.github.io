<template>
  <v-card flat id="work" :color="color">
    <v-card-title class="ml-4">Work</v-card-title>
    <v-card-text>
      <div style="height: 500px"></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Work",
  props: ['color']
}
</script>

<style scoped>

</style>
