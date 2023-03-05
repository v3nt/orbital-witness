<template>
<div><h1>I am INDEX</h1> </div>
</template>


<script setup lang="ts">
import { usePlotsStore } from "~/store/plots";
const plots = usePlotsStore();
plots.setPlots();
</script>