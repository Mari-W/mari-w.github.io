<template>
  <v-app-bar app color="transparent" flat>
    <v-btn
        text
        v-scroll-to="'#about'"
    >
      <span class="mr-2">About</span>
    </v-btn>

    <v-btn
        text
        v-scroll-to="'#projects'"
    >
      <span class="mr-2">Projects</span>
    </v-btn>

    <v-btn
        text
        v-scroll-to="'#education'"
    >
      <span class="mr-2">Education</span>
    </v-btn>

    <v-btn
        text
        v-scroll-to="'#work'"
    >
      <span class="mr-2">Work experience</span>
    </v-btn>
    <v-btn
        text
        v-scroll-to="'#voluntary'"
    >
      <span class="mr-2">Voluntary work</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
        href="https://twitter.com/mariusweidner"
        target="_blank"
        text
    >
      <span class="mr-2">Twitter</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>

    <v-btn
        href="mailto:web-contact@mariusweidner.de"
        target="_blank"
        text
    >
      <span class="mr-2">Mail</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>

    <v-btn
        href="https://github.com/Mari-W"
        target="_blank"
        text
    >
      <span class="mr-2">GitHub</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>
