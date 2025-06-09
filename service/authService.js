import jwt from "jsonwebtoken";
import authRepository from "../repository/authRepository.js";

export const registerService = (email, password) => {
  return authRepository.registerRepository(email, password);
};

export const loginService = async (email, password) => {};
