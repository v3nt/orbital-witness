import {defineStore} from 'pinia';
import PLOTS_ACTIONS from "~/store/plots/actions";
import PLOTS_GETTERS from "~/store/plots/getters";
import PLOTS_STATE from "~/store/plots/state";

export const usePlotsStore = defineStore("plots", {
    state: PLOTS_STATE.state,
    actions: PLOTS_ACTIONS,
    getters: PLOTS_GETTERS,
});
