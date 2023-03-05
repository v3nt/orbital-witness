export interface PlotInfo {
    titleNumber: string;
    propertyAddress: string;
    tenure: string;
    x: number;
    y: number;
}

export interface PlotState {
    postList: PlotInfo[];
    post: PlotInfo | null;
}
