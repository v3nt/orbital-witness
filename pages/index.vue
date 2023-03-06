<template>
  <div>
    <h1>Orbital Witness - your plots</h1>
    <div v-if="plotsList">
      <div class="my-3" v-if="tableRows && tableRows.length">
        Showing {{ tableRows.length }} results
      </div>
      <table class="table">
        <thead>
        <tr>
          <th
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

const plotsStore = usePlotsStore();
const {plotsList} = storeToRefs(plotsStore);
plotsStore.setPlots();
let plotsListWhole = plotsList;

const headerColumns = [
  { title: "Plot number", id: "number", sort: "ASC" },
  {
    title: "Last report date",
    id: "lastReportingDate",
    sortBy: "lastReportingDateUnix",
  },
  {
    title: "Last report period",
    id: "lastReportingPeriod",
    sortBy: "lastReportingPeriodUnix",
  },
];

const { sortTableBy, tableRows, tableHeaderColumns } = useTable(
    plotsListWhole as any,
    headerColumns
);

 </script>