import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll() {
    return [
      {
        id: 1,
        name: 'Pizza peperoni',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '../assets/5.jpg',
        tags: ['slowFood', 'Soup'],
      },
      {
        id: 2,
        name: 'Burger Vita',
        price: 12,
        cookTime: '15-20',
        favorite: false,
        origins: ['germany'],
        star: 3.0,
        imageUrl: '../assets/12.jpg',
        tags: ['slowFood', 'Soup'],
      },
      {
        id: 3,
        name: 'Pizza Corn',
        price: 16,
        cookTime: '5-20',
        favorite: false,
        origins: ['spain'],
        star: 4.0,
        imageUrl: '../assets/7.jpg',
        tags: ['slowFood', 'Soup'],
      },
      {
        id: 4,
        name: 'Burger American',
        price: 10,
        cookTime: '20-25',
        favorite: false,
        origins: ['american'],
        star: 4.0,
        imageUrl: '../assets/11.jpg',
        tags: ['slowFood', 'Soup'],
      },
      {
        id: 5,
        name: 'Menu Burger',
        price: 15,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 5.0,
        imageUrl: '../assets/9.jpg',
        tags: ['slowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Burger Clasic',
        price: 25,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '../assets/10.jpg',
        tags: ['slowFood', 'Soup'],
      },
      {
        id: 7,
        name: 'Pizza Diavola',
        price: 20,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 1.0,
        imageUrl: '../assets/3.jpg',
        tags: ['slowFood', 'Soup'],
      },
      {
        id: 8,
        name: 'Meniu Burger Clasic',
        price: 20,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 2.0,
        imageUrl: '../assets/8.jpg',
        tags: ['slowFood', 'Soup'],
      },

    ]
  }
}
