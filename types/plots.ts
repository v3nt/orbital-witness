export interface PlotsInfo {
    titleNumber: string;
    propertyAddress: string;
    tenure: string;
    x: number;
    y: number;
}

export interface PlotsState {
    plotsList: PlotsInfo[];
    plot: PlotsInfo | null;
}
