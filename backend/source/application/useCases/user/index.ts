import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { AuthService, UserReposiotry } from "@domain/interfaces";
import { makeAuthService } from "@application/services";

import { validate as addUserValidate } from "./add/addUserValidator";
import { makeCreateUser } from "./add/addUser";
import { makeFindUser } from "./find";

export type MakeUserDependencies = {
  userRepository: UserReposiotry;
  authService: AuthService;
};

export const makeUsers = ({
  userRepository,
  authService,
}: MakeUserDependencies) => {
  return {
    createUser: makeCreateUser({
      userRepository,
      validate: addUserValidate,
      authService,
    }),
    findUser: makeFindUser({
      userRepository,
    }),
  };
};
