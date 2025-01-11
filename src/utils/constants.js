export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/95091883?s=400&u=d1d9c3cd57fc059cea663a1bb872b3f612ed9418&v=4";
export const LOGIN_BG =
  "https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?t=st=1736354230~exp=1736357830~hmac=79fcfd4f15fa862dd565faa1cdfbab828d8fae663e547417b73001fb1c94a87c&w=1800";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { indentifier: "en", name: "Engilsh" },
  { indentifier: "hi", name: "Hindi" },
  { indentifier: "es", name: "Spanish" },
];

export const OPENAPI_KEY = process.env.REACT_APP_OPENAPI_KEY;
