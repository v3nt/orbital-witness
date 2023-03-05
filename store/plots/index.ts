// data.map(({
//               number: ['Title Number'],
//               address: ['Property Address'],
//               tenure: ['Tenure'],
//               x: X,
//               y: Y,
//
//           }) => ({
//     number, address, tenure,
//     x: X,
//     y: Y,
// }));
import {PlotsInfo} from "~/types/plots";

const debuggingData = [
    {
        TitleNumber: "243751",
        PropertyAddress: "31-35 Kirby Street, London, EC1N 8TE",
        Tenure: "Freehold",
        X: -0.107690402,
        Y: 51.52028757
    },
    {
        TitleNumber: "342999",
        PropertyAddress: "102-108 Clerkenwell Road, London (EC1M 5SA)",
        Tenure: "Freehold",
        X: -0.104842377,
        Y: 51.52256431
    },
    {
        TitleNumber: "41229",
        PropertyAddress: "75 Farringdon Road, London (EC1M 3JY)",
        Tenure: "Freehold",
        X: -0.106601162,
        Y: 51.52122929
    },
    {
        TitleNumber: "87401",
        PropertyAddress: "45 Hatton Garden, London (EC1N 8EU)",
        Tenure: "Freehold",
        X: -0.108401741,
        Y: 51.52086283
    },
    {
        TitleNumber: "AGL250417",
        PropertyAddress: "First Floor Farringdon Place, 20 Farringdon Road, London (EC1M 3HE)",
        Tenure: "Leasehold",
        X: -0.105581315,
        Y: 51.52042461
    },
    {
        TitleNumber: "AGL436244",
        PropertyAddress: "Farringdon Station, Cowcross Street, London, EC1M 6BY",
        Tenure: "Freehold",
        X: -0.105314569,
        Y: 51.52098786
    },
    {
        TitleNumber: "BB15891",
        PropertyAddress: "ground floor and basement 32-33 Hatton Garden, London (EC1N 8DL)",
        Tenure: "Leasehold",
        X: -0.107986685,
        Y: 51.51993163
    },
    {
        TitleNumber: "EGL564707",
        PropertyAddress: "Blocks A-F and H, J, K and L Peabody Estate and 1-5 Peabody Terrace, Farringdon Lane, London",
        Tenure: "Freehold",
        X: -0.107177377,
        Y: 51.52405734
    },
    {
        TitleNumber: "LN137710",
        PropertyAddress: "11 St Cross Street, London (EC1N 8UB)",
        Tenure: "Freehold",
        X: -0.107816108,
        Y: 51.52063423
    },
    {
        TitleNumber: "LN163951",
        PropertyAddress: "the site of 63 to 66 Hatton Garden, 56 to 70 (even) and part of 52 and 54 Leather Lane, London",
        Tenure: "Freehold",
        X: -0.109285543,
        Y: 51.52098759
    },
    {
        TitleNumber: "LN78969",
        PropertyAddress: "6 Crawford Passage, London",
        Tenure: "Freehold",
        X: -0.109560007,
        Y: 51.52356671
    },
    {
        TitleNumber: "LN90927",
        PropertyAddress: "43 Hatton Garden, London, EC1N 8EL",
        Tenure: "Freehold",
        X: -0.108202889,
        Y: 51.52058409
    },
    {
        TitleNumber: "NGL776926",
        PropertyAddress: "26 to 29 (inclusive) St Cross Street, London (EC1N 8UH)",
        Tenure: "Freehold",
        X: -0.109252274,
        Y: 51.52068331
    },
    {
        TitleNumber: "NGL867682",
        PropertyAddress: "a transformer chamber, 31-35 Kirby Street, London",
        Tenure: "Leasehold",
        X: -0.107607986,
        Y: 51.52028071
    },
    {
        TitleNumber: "NGL887140",
        PropertyAddress: "Flat B, 33 Clerkenwell Green, London (EC1R 0DU)",
        Tenure: "Leasehold",
        X: -0.106007473,
        Y: 51.52289931
    },
    {
        TitleNumber: "NGL931799",
        PropertyAddress: "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
        Tenure: "Leasehold",
        X: -0.108098777,
        Y: 51.5201911
    },
    {
        TitleNumber: "NGL937491",
        PropertyAddress: "Ground Floor, 32-33 Hatton Garden, London (EC1N 8DL)",
        Tenure: "Leasehold",
        X: -0.108005388,
        Y: 51.51992937
    }
];
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
                .then((response) => {
                    const sanitizedData = debuggingData.map((item) => {
                        console.log(item);
                        return {number: item.TitleNumber}
                    });
                    console.log(debuggingData);
                    this.plotsList = sanitizedData;
                });
        },
    },
    getters: {
        getPlots: (state) => state.plotsList,
    },
});
