<template>
  <div>
    <h1>I am INDEX</h1>
    <div v-if="myPlots">
      <table>
        <thead>
        <tr>
          <td>Plot Number</td>
          <td>Address</td>
          <td>tenure</td>
        </tr>
        </thead>
        <tbody>

        <tr v-for="item in myPlots">
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

const myPlots = ref();

const plotsStore = usePlotsStore();
const {plotsList} = storeToRefs(plotsStore);
plotsStore.setPlots();
myPlots.value = plotsList.value;
</script>