import {PlotsState} from "~/types/plots";

const PLOTS_GETTERS = {
    getPlots :  (state: PlotsState) => state.plotsList,
}


export default PLOTS_GETTERS;