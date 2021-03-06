import { BaseLayoutProvider, DataProvider } from "recyclerlistview";
/**
 * Example for multiplier 2
 *Original Items:       1  2   3   4
 Fake Items:            1   2   3   4   1   2   3   4   1
 Fake Index:            0   1   2   3   4   5   6   7   8
 * @param items
 * @param multipler
 * @returns {any[]}
 */
export default function useDataState(items: object[], multipler: number, { height, width }: {
    height: number;
    width: number;
}): [DataProvider, BaseLayoutProvider];
