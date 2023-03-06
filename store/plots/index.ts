import {PlotsInfo} from "~/types/plots";


export const usePlotsStore = defineStore("plots", {
    state: () => {
        return {
            plotsList: [],
            plot: null,
        };
    },
    actions: {
        async setPlots(filterNameInput:string='') {
            await fetch(`https://owfetechtask.blob.core.windows.net/titledata/testdata.json`)
                .then((response) => response.json())
                .then((data) => {
                     const simplifyData = data.map((item:any) => ({
                        number: item['Title Number'],
                        address: item['Property Address'],
                        tenure: item['Tenure'],
                        x: item.X,
                        y: item.Y,
                    })).filter((e: PlotsInfo) =>
                         e.number
                             .toLowerCase()
                             .includes(filterNameInput.toLowerCase())
                     );
                    this.plotsList = simplifyData;
                });
        },
    },
    getters: {
        getPlots: (state) => state.plotsList,
    },
});
3