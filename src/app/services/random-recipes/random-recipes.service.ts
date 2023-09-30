import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) { }

listRandomFood(take: number) {
const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=41891ff59eac4642acb277b005182fe5&number=${take}`;


return this.http.get(apiUrl);
  }
}




