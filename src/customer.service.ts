import { Observable } from "rxjs";
import { ICustomer } from "./customer.interface";
import { customerMock } from "./customer.mock";

export class CustomerService {
    public isData = false;

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
}