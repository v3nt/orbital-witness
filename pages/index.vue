<template>
  <div>
    <h1>I am INDEX</h1>
    <div v-if="plots">
      <table >
        <thead >
          <tr>
            <td>Plot Number</td>
            <td>Address</td>
            <td>tenure</td>
          </tr>
        </thead>
        <tbody>

         <tr v-for="item in myPlots">
          <td>
            {{item}}
          </td>
          <td>
           </td>
          <td>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup lang="ts">
import {usePlotsStore} from "~/store/plots";

const myPlots = ref();

const plots = usePlotsStore();
plots.setPlots();
myPlots.value = plots;
</script>