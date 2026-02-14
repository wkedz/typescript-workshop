

// module is a seperate file that containse declaration of code, and can be imported to other files.
// 

/**
 * @module AuthTypes
 * 
 * This module defines types related to authentication.
 * 
 * @interface User
 * Represents a user in the authentication system.
 * 
 * @property {string} email - The email address of the user.
 * @property {Array<string>} roles - An array of roles assigned to the user.
 * @property {string} [source] - An optional source from which the user was created.
 */
declare module "AuthTypes"{
    export interface User {
        email: string;
        roles: Array<string>;
        source?: string;
    }
}