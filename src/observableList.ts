import { Observable } from "rx";
import { BehaviorSubject } from "rxjs";

export interface IProduct {
    name: string;
    value: number;
}

export class Stock {
    public products: Array<IProduct> = [];
    public list$ = new BehaviorSubject<IProduct[]>(this.products);

    constructor() {
    }

    addProduct(product: IProduct) {
        this.products.push(product);
        this.list$.next(this.products);
    }
}