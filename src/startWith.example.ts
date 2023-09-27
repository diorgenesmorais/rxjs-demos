import { Observable, of } from 'rxjs';
import { waitFor } from './util';

export const source = of(1, 2, 3);
export const getList = () => {
    return new Observable(data => {
        if(waitFor(2000)) {
            data.next([1, 2, 3])
        }
    })
}
