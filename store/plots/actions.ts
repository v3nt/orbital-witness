const PLOTS_ACTIONS = {
    setPlots() {
        fetch(`https://owfetechtask.blob.core.windows.net/titledata/testdata.json`)
            .then((response) => response.json())
            .then((data) => {

            });
    },
}


export default PLOTS_ACTIONS;