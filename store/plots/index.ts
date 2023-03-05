import { defineStore } from 'pinia';
export const usePostsStore = defineStore("plots", {
    state: () => {
        return {
            plotsList: [],
            plot: null,
        };
    },
    actions: {
    },
    getters: {
    },
});
