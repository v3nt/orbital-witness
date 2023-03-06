<template>
  <div class="mb-4">
    <GoogleMap
        ref="mapRef"
        api-key="AIzaSyCrGl7gKsMSXVTcZv6-dyPghPqdejLn3DY"
        style="width: 100%; height: 500px"
        :zoom="15"
        :center="centerNew "
    >
      <MarkerCluster>
        <Marker v-for="(location, i) in locations" :clickable="true" :options="{ position: location }" :key="i">
          <InfoWindow>{{ location.number }}</InfoWindow>
        </Marker>
      </MarkerCluster>
    </GoogleMap>
  </div>

</template>


<script setup lang="ts">

import {GoogleMap, Marker, MarkerCluster, InfoWindow} from 'vue3-google-map';

const centerNew = ref({
  lat: 51.52028757,
  lng: -0.107690402
});

const props = defineProps({
  markers: {type: Array, required: false}
});

const locations = computed(() => {
  return props.markers
});


const mapRef = ref<any>(null)

watch(props.markers, () => {
  centerNew.value = {lat: props?.markers[0]?.lat, lng: props?.markers[0]?.lng};
})


</script>