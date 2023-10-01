import { Subject } from "rxjs";
import { getList } from "../src/startWith.example";
import { startWith, takeUntil } from "rxjs/operators";

describe('StartWith testing', () => {
    it('should get an initial value', async () => {
        const unsub$ = new Subject();
        getList()
            .pipe(startWith(0), takeUntil(unsub$))
            .subscribe(result => {
                if (result == 0) {
                    expect(result).toEqual(0);
                    unsub$.complete();
                }
            })
    })

    it('should get total values', async () => {
        const unsub$ = new Subject();
        getList()
            .pipe(takeUntil(unsub$))
            .subscribe(result => {
                if (result) {
                    expect(result).toEqual([1, 2, 3]);
                    unsub$.complete();
                }
            })
    })
})