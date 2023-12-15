import { delay, finalize, first, retryWhen, take, takeUntil } from "rxjs/operators";
import { getList } from "./startWith.example";
import { Subject } from "rxjs";

function run() {
    const unsub$ = new Subject();
    const observer = {
        next: (value: any) => {
            console.log('NEXT ', value)
            unsub$.next()
        },
        error: (value: any) => console.log('ERROR ', value),
        complete: () => console.log('COMPLETE')
    }
    const subscription = getList()
        .pipe(
            finalize(() => console.log('finalizou a inscrição'))
        )
        .subscribe(data => {
            if(data) {
                console.log('DATA ', data);
            }
        });
        subscription.unsubscribe();

    /**
     * retryWhen irá executar a chamada novamente se houver um erro com base no tempo do delay
     * e por duas vezes conforme o take
     */
    getList()
        .pipe(
            takeUntil(unsub$),
            retryWhen(errors => errors.pipe(delay(1000), take(2)))
        )
        .subscribe(observer)
}

run();  
