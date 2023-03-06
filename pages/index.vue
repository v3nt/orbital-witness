<template>
  <div>
    <h1>Orbital Witness - your plots</h1>
    <div v-if="plotsList">
      <div class="my-4 col">
        <label for="filter-table-string" class="col-2 fw-bold form-label"
        >Filter table by plot number</label
        >
        <input
            id="filter-table-string"
            type="text"
            placeholder="..."
            v-model="filterNameInput"
            @input="filterByString"
            class="form-control"
        />
      </div>
      <div class="my-3" v-if="tableRows && tableRows.length">
        Showing {{ tableRows.length }} results
      </div>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th role="button"
              v-for="(headerItem, i) in tableHeaderColumns"
              :key="`table-header-col-${i}`"
              @click="sortTableBy(headerItem.id, headerItem?.sort, i)"
              class="pe-4"
          >
            {{ headerItem.title }}
            {{ headerItem.sort }}
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
          <td> {{ item.tenure }}
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
const filterNameInput = ref("");

const plotsStore = usePlotsStore();
const {plotsList} = storeToRefs(plotsStore);
plotsStore.setPlots();
let plotsListWhole = plotsList;

const filterByString = () => {
  plotsStore.setPlots(filterNameInput.value);
};

const headerColumns = [
  { title: "Plot number", id: "number", sort: "ASC" },
  {
    title: "Address",
    id: "address",
    sortBy: "address",
  },
  {
    title: "Tenure",
    id: "tenure",
    sortBy: "tenure",
  },
];

const { sortTableBy, tableRows, tableHeaderColumns } = useTable(
    plotsListWhole as any,
    headerColumns
);

</script>

<style lang="scss">
th{

}
</style>