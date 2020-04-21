export interface TableState {
    loading: boolean;
    list: Array<Table>;
    error: Error;
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