<template>
  <div class="row">
    <div class="col-4 overflow-auto" style="max-height: 300px;">
      <div class="mb-4">
        <div role="search" class="bd-search d-flex align-items-center">
          <span
            style="position: relative; display: inline-block; direction: ltr;"
            ><input
              type="search"
              class="form-control"
              id="search-input"
              v-model="filterDiseases"
              placeholder="Search..."
              aria-label="Search for..."
              autocomplete="off"
              spellcheck="false"
              style="position: relative; vertical-align: top;"
            />
          </span>
        </div>
      </div>

      <div class="list-group" id="list-tab" role="tablist">
        <a
          :class="[
            'list-group-item',
            'list-group-item-action',
            'd-flex',
            'justify-content-between',
            'align-items-center'
          ]"
          v-for="disease in filteredDiseases"
          :key="disease.id"
          :id="'list-' + disease.id + '-list'"
          data-toggle="list"
          :href="'#list-' + disease.id"
          role="tab"
          :aria-controls="'list-control-' + disease.id"
          >{{ disease.title }}</a
        >
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div
          :class="['tab-pane', 'fade']"
          v-for="disease in filteredDiseases"
          :key="disease.id"
          :id="'list-' + disease.id"
          role="tabpanel"
          :aria-labelledby="'list-' + disease.id + '-list'"
        >
          {{ disease.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Catalog",
  computed: {
    ...mapGetters(["diseases", "filters"]),
    filteredDiseases() {
      return this.filterDiseases
        ? Object.values(this.diseases)
            .filter(disease =>
              new RegExp(this.filterDiseases, "i").test(disease.title)
            )
            .reduce((acc, curr) => {
              acc[curr.id] = curr;
              return acc;
            }, {})
        : this.diseases;
    },
    filterDiseases: {
      get() {
        return this.filters.catalogFilter;
      },
      set(n) {
        this.updateFilter({
          key: "catalogFilter",
          value: n
        });
      }
    }
  },
  methods: {
    ...mapActions(["getDiseases"]),
    ...mapMutations(["updateFilter"])
  },
  mounted() {
    this.getDiseases().then(data => {
      console.log(data);
    });
  }
};
</script>
