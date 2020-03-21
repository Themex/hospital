<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col" v-for="header in Object.keys(items.head)" :key="header">
          {{ items.head[header] }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(body, key) in items.body" :key="key">
        <td
          v-for="header in Object.keys(items.head)"
          :key="header"
          v-bind:scope="header === 'id' ? 'row' : false"
          v-html="
            header === 'id' ? '<b>' + body[header] + '</b>' : body[header]
          "
        ></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "HospitalTable",
  props: {
    items: Object
  }
};
</script>

<style scoped></style>
