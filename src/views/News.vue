<template>
  <div class="card-deck mb-3 text-center">
    <topic
      v-for="piece of news"
      v-bind:key="piece.id"
      :title="piece.title"
      :subtitle="piece.subtitle"
      :link-msg="piece.linkMsg"
      :msg="piece.msg"
      :is-first="piece.isFirst"
      :link="piece.link"
    ></topic>
  </div>
</template>

<script>
import Topic from "../components/Topic";
export default {
  name: "News",
  data() {
    return {
      news: [
        {
          id: 1,
          title: "Corona Extra",
          subtitle: "No money",
          linkMsg: "Hey you!",
          msg: "B2С for free",
          link: {},
          isFirst: true
        },
        {
          id: 2,
          title: "Babushka death",
          subtitle: "Attack",
          linkMsg: "Check this out",
          msg: "Oh la la RIP"
        },
        {
          id: 3,
          title: "Pro",
          subtitle: '$29 <small class="text-muted">/ mo</small>',
          linkMsg: "Check this out",
          msg: "We need qualified Personnel"
        }
      ]
    };
  },
  components: {
    topic: Topic
  }
};
</script>

<style scoped></style>
