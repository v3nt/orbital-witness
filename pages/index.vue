<template>
  <div class="mt-3">
    <ow-title title="Orbital Witness" />
    <h2>Your plots</h2>
    <Map :markers="plotsList" />
    <div v-if="plotsList">
      <div class="my-4">
        <form @submit.prevent>
          <label for="filter-table-string" class="fw-bold form-label visually-hidden"
          >Filter table by plot number</label
          >
          <input
              id="filter-table-string"
              type="text"
              placeholder="Search by plot number..."
              v-model="filterNameInput"
              @input="filterByString"
              class="form-control"
          /></form>
      </div>
      <div class="my-3" v-if="tableRows && tableRows.length && filterNameInput">
        Showing {{ tableRows.length }} results
      </div>
      <table class="table table-striped table-hover table-responsive">
        <thead>
        <tr>
          <th role="button"
              v-for="(headerItem, i) in tableHeaderColumns"
              :key="`table-header-col-${i}`"
              @click="sortTableBy(headerItem.id, headerItem?.sort, i)"
              class="pe-4"
              :class="headerItem.classes"
          >
            {{ headerItem.title }}
            <span class="small">{{ headerItem.sort }}</span>
          </th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="item in plotsList">
          <td>
            {{ item.number }}
          </td>
          <td> {{ item.address }}
          </td>
          <td class="d-none d-md-table-cell"> {{ item.tenure }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {usePlotsStore} from "~/store/plots";
import OwTitle from "~/components/ow-Title.vue";

const filterNameInput = ref("");

const plotsStore = usePlotsStore();
const {plotsList} = storeToRefs(plotsStore);
plotsStore.setPlots();
let plotsListWhole = plotsList;

const filterByString = () => {
  plotsStore.setPlots(filterNameInput.value);
};

const headerColumns = [
  {title: "Plot number", id: "number", sort: "ASC", classes: ''},
  {
    title: "Address",
    id: "address",
    sortBy: "address",
    classes: ''
  },
  {
    title: "Tenure",
    id: "tenure",
    sortBy: "tenure",
    classes: 'd-none d-md-table-cell'
  },
];

const {sortTableBy, tableRows, tableHeaderColumns} = useTable(
    plotsListWhole as any,
    headerColumns
);
</script>

<style lang="scss">
th {

}
</style>