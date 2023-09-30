import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) { }
  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=41891ff59eac4642acb277b005182fe5`;
  
  return this.http.get(apiUrl);
  }
  
  takeSimilarRecipe(id: number){
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=41891ff59eac4642acb277b005182fe5`;
  
    return this.http.get(apiUrl);
  }
}
