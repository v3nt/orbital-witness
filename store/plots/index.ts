import {defineStore} from 'pinia';


export const usePlotsStore = defineStore("plots", {
    state: () => {
        return {
            plotsList: [],
            plot: null,
        };
    },
    actions: {
        setPlots() {
            fetch(`https://owfetechtask.blob.core.windows.net/titledata/testdata.json`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.plotsList = data;
                });
        },
    },
    getters: {
        getPlots: (state) => state.plotsList,
    },
});
3