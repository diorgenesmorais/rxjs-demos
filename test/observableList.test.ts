import { Subject } from "rxjs";
import { Stock } from "../src/observableList"
import { TestScheduler } from "rxjs/testing";

describe('Observable list', () => {
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