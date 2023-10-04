import { catchError, debounceTime } from "rxjs/operators";
import { CustomerService } from "../src/customer.service"

fdescribe('Customer service', () => {
    let service: CustomerService;

    beforeEach(() => {
        service = new CustomerService();
    })

    afterAll(() => {
        return new Promise((resolve, _) => setTimeout(() => resolve(''), 500))
    })

    it('should get error message', async () => {
        return service.getCustomer()
            .subscribe((data) => {
                    expect(data).toBeNull()
                },
                err => {
                    expect(err).toStrictEqual({severity: 'error', message: 'Serviço indisponível'})
                    expect(err).not.toBeNull()
                }
            ) 
    })
})