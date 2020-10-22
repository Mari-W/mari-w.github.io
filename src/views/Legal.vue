<template>
  <div class="ma-0 pa-0">
    <v-app-bar app color="transparent" flat>
      <v-btn class="ml-1" icon href="/">
        <v-icon>mdi-arrow-left-bold</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <contact/>
    </v-app-bar>
    <v-card flat color="transparent" class="ml-4">
      <v-card-title>Legal Disclosure</v-card-title>
      <v-card-text>
        Information in accordance with Section 5 TMG<br/>
        <br/>
        Marius Weidner <br/>
        Heinrich-Finke-Straße, 3a <br/>
        79111 Freiburg im Breisgau <br/>
      </v-card-text>
      <v-divider/>
      <v-card-title>Contact Information</v-card-title>
      <v-card-text>
        E-Mail:
        <a
            href="mailto:legal@mariusweidner.de"
            style="color:white; text-decoration: none;"
        >legal@mariusweidner.de</a
        ><br/>
        Internet address:
        <a
            href="https://mariusweidner.de"
            style="color:white; text-decoration: none;"
        >mariusweidner.de</a
        ><br/>
        Telephone: On request <br/>
      </v-card-text>
      <v-divider/>
      <v-card-title>Disclaimer</v-card-title>
      <v-card-text>
        <strong>Accountability for content</strong><br/><br/>
        The contents of our pages have been created with the utmost care.
        However, we cannot guarantee the contents' accuracy, completeness or
        topicality. According to statutory provisions, we are furthermore
        responsible for our own content on these web pages. In this matter,
        please note that we are not obliged to monitor the transmitted or saved
        information of third parties, or investigate circumstances pointing to
        illegal activity. Our obligations to remove or block the use of
        information under generally applicable laws remain unaffected by this as
        per §§ 8 to 10 of the Telemedia Act (TMG).
        <br/><br/><br/>
        <strong>Accountability for links</strong><br/>
        <br/>
        Responsibility for the content of external links (to web pages of third
        parties) lies solely with the operators of the linked pages. No
        violations were evident to us at the time of linking. Should any legal
        infringement become known to us, we will remove the respective link
        immediately.
        <br/><br/><br/>
        <strong>Copyright</strong><br/><br/>
        Our web pages and their contents are subject to German copyright law.
        Unless expressly permitted by law, every form of utilizing, reproducing
        or processing works subject to copyright protection on our web pages
        requires the prior consent of the respective owner of the rights.
        Individual reproductions of a work are only allowed for private use. The
        materials from these pages are copyrighted and any unauthorized use may
        violate copyright laws.
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Contact from "@/components/misc/Contact";

export default {
  name: "Legal",
  components: {Contact}
};
</script>
