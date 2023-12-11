import { auth } from "express-oauth2-jwt-bearer";

const checkJwt = auth({
  audience: "http://localhost:3000",
  issuerBaseURL: "https://dev-r4k02o7yltbmohgl.us.auth0.com/",
  tokenSigningAlg: "RS256"
});

export default checkJwt;
