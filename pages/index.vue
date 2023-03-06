<template>
  <div>
    <h1>Orbital Witness - your plots</h1>
    <div v-if="plotsList">
      <table class="table">
        <thead>
        <tr>
          <th>Plot Number</th>
          <th>Address</th>
          <th>Tenure</th>
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
 </script>