import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;

  private cart: Cart = new Cart();
  addToCart(food: Foods): void {
    let cartItem = this.cart.intems.find(item => item.food.id == food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.intems.push(new cartItem(food));
  }
  removeFromCart(foodId: number): void {
    this.cart.intems = this.cart.intems.filter(item => item.food.id != foodId)
  }
  changeQuantity(quantity: number, foodId: number) {
    let cartItem = this.cart.intems.find(item => item.food.id == foodId)
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart(): Cart {
    return this.cart;
  }
}
