import { Role } from "./Role";

export interface User {
    // Each of these field name has to match the json data (variable names)  
    userId: number | null;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    role_id: Role;
    //recipe_id: number;
}