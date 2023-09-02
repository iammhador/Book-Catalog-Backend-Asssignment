import { NextFunction, Request, Response } from "express";
import { JWTHelpers } from "../../helpers/jwt";
import { Secret } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const auth = (...requiredRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("You're not authorized");
      }

      // Token verify
      let verifiedUser = null;
      verifiedUser = JWTHelpers.verifiedToken(
        token,
        process.env.JWT_SECRET as Secret
      );

      req.user = verifiedUser;

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new Error("FORBIDDEN");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
