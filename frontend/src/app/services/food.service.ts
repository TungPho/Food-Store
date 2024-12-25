import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sampleFoods } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAllFoods(): Food[] {
    return sampleFoods;
  }
  getFoodBySearchTerm(searchTerm: string) {
    return sampleFoods.filter((food) =>
      food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }
}
