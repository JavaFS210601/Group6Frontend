import { CompositeId, RecipeIngrediants } from "./Recipe";

export interface Ingrediant
{
    ingrediante_id: number;
    ingrediant: string;
    ammount: number;
    
}

export interface IngrediantExt extends Ingrediant
{   
    recipeIngrediants: RecipeIngrediant ;
    recipe: number;
}
export interface RecipeIngrediant { 
    compositeId: CompositeId;
    ingrediant : number;
    
    recipe: number
}
/*
"ingrediant": {
    "ingrediante_id": 1,
    "ingrediant": "coco",
    "ammount": "200",
    "recipeIngrediants": [
        {
            "compositeId": {
                "ingrediant_id": 1,
                "recipe_id": 1
            },
            "ingrediant": 1,
            "recipe": 1
        }
    ]
},
*/