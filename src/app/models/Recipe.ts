import { Ingrediant } from "./Ingrediant";

export interface Recipe {
    recipe_id: number;
    name: string;
    description: string;
    category: string;
    inspiration: string;
    
   // userId: number;
  //  methodId: number;
}

export interface RecipeExt extends Recipe{ 
   
    recipeIngrediants: RecipeIngrediants[];
    

}
export interface RecipeIngrediants { 
    compositeId: CompositeId;
    ingrediant : Ingrediant;
    
    recipe: number
}



export interface CompositeId {
    ingrediant_id: number,
    recipe_id: number
}
/*
[
    {
        "recipe_id": 1,
        "name": "1",
        "description": "cool",
        "category": "coconut",
        "inspiration": "1",
        "recipeIngrediants": [
            {
                "compositeId": {
                    "ingrediant_id": 1,
                    "recipe_id": 1
                },
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
                "recipe": 1
            }
        ],
        "recipeSteps": [
            {
                "compositeId": {
                    "step_id": 1,
                    "recipe_id": 1
                },
                "step": {
                    "step_id": 1,
                    "step": "step1",
                    "recipeSteps": [
                        {
                            "compositeId": {
                                "step_id": 1,
                                "recipe_id": 1
                            },
                            "step": 1,
                            "recipe": 1
                        }
                    ]
                },
                "recipe": 1
            }
        ]
    }
]

*/