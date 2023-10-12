import { first } from "rxjs/operators";
import { CustomerService } from "../src/customer.service"

fdescribe('Customer service', () => {
    let service: CustomerService;

    beforeEach(() => {
        service = new CustomerService();
    })

    afterAll(() => {
        return new Promise((resolve, _) => setTimeout(() => resolve(''), 250))
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

    it('should receive error message from a subject', async () => {
        service.error$
            .pipe(first())
            .subscribe(err => {
                expect(err.length).toEqual(1)
                expect(err[0]).toStrictEqual({severity: 'error', message: 'Serviço indisponível'})
            })

        service.getCustomerBeneficiaries()
            .subscribe() 
    })
})