import { post } from "../utils/http";

export const homeServices = {
    getUserLessons: (body) => post("/api/user/getlessons", body)
}