import { startTime, time, waitFor } from './../src/util';
describe('Using closure function', () => {
    it('Should count the seconds', () => {
        const expected = 2000;
        const stopwatch = startTime();

        waitFor(2000);
        const actual = stopwatch();
        expect(actual).toEqual(expected);
    })

    it('Should display a clock with total seconds', () => {
        const expected = '00:05';
        const stopwatch = startTime();

        waitFor(5000);
        const milliseconds = stopwatch();
        const actual = time(milliseconds);
        expect(actual).toBe(expected);
    })
})
