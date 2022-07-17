import { cartItem } from "./cartItem";

export class Cart {
    intems: cartItem[] = [];

    get totalPrice(): number {
        let totalPrice = 0;
        this.intems.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    }
}
// it's create a cart model