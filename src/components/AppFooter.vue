<template>
  <v-footer padless color="transparent">
    <v-card
        flat
        tile
        width="100%"
    >
      <v-card-text class="text-center">
        <v-btn text disabled href="https://mariusweidner.de" target="_blank">
         Marius Weidner - {{ new Date().getFullYear() }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>

</style>
