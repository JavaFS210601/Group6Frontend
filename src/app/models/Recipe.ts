import { Ingrediant } from "./Ingrediant";
import { Step } from "./Step";

export interface Recipe {
    recipe_id: number | null;
    name: string;
    description: string;
    category: string;
    inspiration: string;

}

export interface RecipeExt extends Recipe{ 
   
   ingrediants: Ingrediant[];
   steps: Step[];

}

export interface RecipeDTO extends Recipe {
    userId : number;
    ingrediants: string; 
    steps: string;
}
