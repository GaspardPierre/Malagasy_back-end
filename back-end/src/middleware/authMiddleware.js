import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:3000",
  issuerBaseURL: "https://dev-r4k02o7yltbmohgl.us.auth0.com/",
  tokenSigningAlg: "RS256"
});
const authMiddleware = (req, res, next) => {
    jwtCheck(req, res, next).catch(next);
  };

export default authMiddleware;
