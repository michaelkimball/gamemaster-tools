import { TableState } from './table.model';
import { RollHistoryState } from './roll.model';

export interface AppState {
    readonly tables: TableState;
    readonly rollHistory: RollHistoryState;
};