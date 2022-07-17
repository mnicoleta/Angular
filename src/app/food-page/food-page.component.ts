import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: Foods;
  constructor(private activateRoute: ActivatedRoute,
    private foodService: FoodService) {
    activateRoute.params.subscribe((params) => {
      if (params['id'])
        this.food = foodService.getFoodById(params['id'])
    })
  }
  ngOnInit(): void {

  }
}






