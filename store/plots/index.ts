import {PlotsInfo} from "~/types/plots";


export const usePlotsStore = defineStore("plots", {
    state: () => {
        return {
            plotsList: [],
            plot: null,
        };
    },
    actions: {
        async setPlots(filterNameInput: string = '') {
            await fetch(`https://owfetechtask.blob.core.windows.net/titledata/testdata.json`)
                .then((response) => response.json())
                .then((data) => {
                    const simplifyData = data.map((item: any) => ({
                        lng: item.X,
                        lat: item.Y,
                        number: item['Title Number'],
                        address: item['Property Address'],
                        tenure: item['Tenure'],
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