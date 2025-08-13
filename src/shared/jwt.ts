import jwt from "jsonwebtoken";

export async function create_jwt(payload: any, secret: string, expiresTime: number): Promise<string | null> {
  try {
    return jwt.sign(payload, secret, { expiresIn: expiresTime });
  } catch (error: any) {
    return null;
  }
}

export async function validate_jwt(token: string, secret: string): Promise<jwt.JwtPayload | string | null> {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}
