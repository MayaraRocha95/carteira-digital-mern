import jwt from "jsonwebtoken";
import "dotenv/config";
import authRepository from "../repositories/authRepository.js";

export async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).send({ message: "Token não informado" });
  const parts = authorization?.split(" ");
  if (parts.length !== 2)
    return res.status(401).send({ message: "Token mal formatado" });

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "Token mal formatado" });

  jwt.verify(token, process.env.SECRETE, async (err, decoded) => {
    if (err) return res.status(401).send({ message: "Token inválido" });
    if (!decoded) return res.status(401).send({ message: "Token inválido" });

    const user = await authRepository.findById(decoded.id);
    if (!user)
      return res.status(401).send({ message: "Usuário não encontrado" });

    res.locals.user = user;
    
    next();
  });
}
