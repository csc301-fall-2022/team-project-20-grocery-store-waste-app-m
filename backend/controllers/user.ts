// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
// import validator from "validator";

// const cleanUser = (user) => {
//     // Takes in the request body of a "create user" request, validates and sanitizes the data


// }

// export const createUser = (req, res) => {
//     // Validate data 

// }

// export const loginUser = (req, res) => {

// }

// export const createUser = async () => {
//     const user = new User();

//     // Initialize with random data
//     user.firstName = "Daniel";
//     user.lastName = "Lazaro";
//     user.email = "donlazaro@yahoo.com";
//     user.password = "DonLazaroIII"
//     user.dateOfBirth = new Date("2002-07-07");
//     user.emailVerified = false;
//     user.createDate = new Date();

//     await AppDataSource.manager.save(user);

//     console.log("user has been created");
// }