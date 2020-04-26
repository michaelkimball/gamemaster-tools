export interface TableState {
    loading: boolean;
    searchResult: TableSearchResult;
    error: Error;
}
export class TableSearchResult {
    pageSize: number;
    totalCount: number;
    results: Array<Table>;
}
export class Table {
    id: string;
    name: string;
    items: Array<Item>;
}
export class Item {
    id: string;
    description: string;
    weight: number;
    position: number;
}