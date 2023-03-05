export interface PlotsInfo {
    number: string ;
    address: string;
    tenure: string;
    x: number;
    y: number;
}

export interface PlotsState {
    plotsList: PlotsInfo[];
    plot: PlotsInfo | null;
}
