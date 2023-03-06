
export interface TableHeaderItem {
    title: string;
    id: string;
    sort?: string;
}

export interface TableHeaderList extends Array<TableHeaderItem> {}
