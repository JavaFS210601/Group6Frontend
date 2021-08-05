test change

# Recipelify

# Goals

1. Guest User should able to see recipes in our website.

2. Guest User should able to search recipes by name

3. Guest User should able to login/logout

4. Member should be able to check their own recipes in the dashboard

5. Member should be to make a recipe and store it in our database

6. Member user should be able to submit recipewith multiple ingredients listing from an API (Food Data Central)

7. Member user should be able to submit recipe with muliple steps.

8. Each recipe will have pictures

## The choice of tools and technologies for the project

AngularJS is used in this project to create an single page application for frontend. Other extra modules includes Ng-bootstrap,  HttpClientModule are used to handle style and http request/response. 

# Data Models 

### Recipe data will have two extension based on the json data coming from the backend
1. Recipe:
    recipe_id: number | null;
    name: string;
    description: string;
    category: string;
    inspiration: string;

    - RecipeExt:
   ingrediants: Ingrediant[];
   steps: Step[];

    - RecipeDTO
    userId : number;
    ingrediants: string; 
    steps: string;

2. User"
    userId: number | null;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    role_id: Role;




# Angular command

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
