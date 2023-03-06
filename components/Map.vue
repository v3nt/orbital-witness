<template>
  <div class="mb-4">
    <GoogleMap
        ref="mapRef"
        api-key="AIzaSyCrGl7gKsMSXVTcZv6-dyPghPqdejLn3DY"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="10"
    >
      <MarkerCluster>
        <Marker v-for="(location, i) in locations" :clickable="true" :options="{ position: location }" :key="i"/>
      </MarkerCluster>
    </GoogleMap>
  </div>
</template>


<script setup lang="ts">

import {GoogleMap, Marker, MarkerCluster} from 'vue3-google-map';

const center = {lat: 52.36834, lng: 4.88635}

const props = defineProps({
  markers: {type: Array, required: true}
});

const locations = [
    ...props.markers,
];
const mapRef = ref<any>(null)

function centermap(locations) {
  if (mapRef.value?.ready) {
    let bounds;
    const gmap = mapRef.value.map;
    const api = mapRef.value.api;
    bounds = new api.LatLngBounds();
    for (let i = 0; i < locations.length; i++) {
      bounds.extend(locations[i]);
    }
    gmap.fitBounds(bounds);
  }
}


watch(
    () => mapRef.value?.ready,
    (ready) => {
      if (!ready) return;
      centermap(locations);
    }
);


</script>