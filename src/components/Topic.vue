<template>
  <div class="card mb-4 shadow-sm">
    <div class="card-header">
      <h4 class="my-0 font-weight-normal" v-html="title"></h4>
    </div>
    <div class="card-body">
      <h1 class="card-title news-card-title" v-html="subtitle"></h1>
      <div class="forty-height mt-3 mb-4" v-html="msg"></div>
      <button
        @click="$router.push(link)"
        type="button"
        :class="[
          'btn',
          'btn-lg',
          'btn-block',
          isFirst ? 'btn-outline-primary' : 'btn-primary'
        ]"
      >
        {{ linkMsg }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topic",
  props: {
    msg: String,
    linkMsg: String,
    title: String,
    subtitle: String,
    link: Object,
    isFirst: Boolean
  }
};
</script>
