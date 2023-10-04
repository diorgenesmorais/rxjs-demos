export interface IBenefity {
    name: string;
}

export interface ICustomer {
    customer: string;
    age: number;
    beneficiaries: Array<IBenefity>;
}