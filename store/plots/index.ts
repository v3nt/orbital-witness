

export const usePlotsStore = defineStore("plots", {
    state: () => {
        return {
            plotsList: [],
            plot: null,
        };
    },
    actions: {
        async setPlots() {
            await fetch(`https://owfetechtask.blob.core.windows.net/titledata/testdata.json`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    const sanitizedData = data.map((item) => ({
                        number: item['Title Number'],
                        address: item['Property Address'],
                        tenure: item['Tenure'],
                        x: item.X,
                        y: item.Y,
                    }));
                    this.plotsList = sanitizedData;
                });
        },
    },
    getters: {
        getPlots: (state) => state.plotsList,
    },
});
3