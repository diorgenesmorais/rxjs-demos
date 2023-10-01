import { debounceTime } from "rxjs/operators";
import { Stock } from "../src/observableList"
import { TestScheduler } from "rxjs/testing";

describe('Observable list with TestScheduler', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            return expect(actual).toEqual(expected);
        });
    });

    it('should get product', () => {
        const stock = new Stock();
        const expectedMarbles = 'a';
        const expectedValues = {
            a: [{name: 'Solda', value: 15}]
        }

        stock.addProduct({name: 'Solda', value: 15});

        testScheduler.run(({expectObservable}) => {
            expectObservable(stock.list$).toBe(expectedMarbles, expectedValues);
        }); 
    });
});

describe('Observable list with done', () => {
    it('should a product in the list', async () => {
        const stock = new Stock();

        stock.addProduct({name: 'Solda', value: 16});

        return stock.list$
            .pipe(debounceTime(10))
            .subscribe(data => {
                if(data.length) {
                    expect(data[0].value).toEqual(16);
                    expect(data[0].value).not.toEqual(17);
                    return;
                }
                throw new Error('Deveria ter um produto pelo menos');
            });

    });
});