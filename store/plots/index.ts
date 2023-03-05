import {defineStore} from 'pinia';
import PLOTS_ACTIONS from "~/store/plots/actions";
import PLOTS_GETTERS from "~/store/plots/getters";

export const usePostsStore = defineStore("plots", {
    state: () => {
        return {
            plotsList: [],
            plot: null,
        };
    },
    actions: PLOTS_ACTIONS,
    getters: PLOTS_GETTERS,
});
