import { post } from "../utils/http";

export const sessionServices = {
    login: (body) => post("/api/session/login", body),
    register: (body) => post("/api/session/registry", body),
}