export interface User {
    // Each of these field name has to match the json data (variable names)  
    user_id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    role_id: number;
    recipe_id: number;
}