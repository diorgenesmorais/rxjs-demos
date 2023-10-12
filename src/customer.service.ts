import { Observable, Subject } from "rxjs";
import { ICustomer } from "./customer.interface";
import { customerMock } from "./customer.mock";
import { IError } from "./error.interface";
import { catchError, map } from "rxjs/operators";

export class CustomerService {
    private errors: Array<IError> = [];
    public isData = false;
    public error$ = new Subject<IError[]>();

    getCustomer(): Observable<ICustomer> {
        return new Observable(data => {
            setTimeout(() => {
                if(this.isData) {
                    data.next(customerMock);
                    return
                }
                data.error({severity: 'error', message: 'Serviço indisponível'})
            }, 200)
        })
    }

    resetErros() {
        this.errors = []
    }
    
    handleError(err: IError) {
        this.errors.push(err)
        this.error$.next(this.errors)
    }

    getCustomerBeneficiaries(): Observable<any> {
        return this.getCustomer()
            .pipe(
                map(data => data.beneficiaries),
                catchError((err: any, caubght: any) => {
                    this.handleError(err)
                    return []
                })
            )
    }
}