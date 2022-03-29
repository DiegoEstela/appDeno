import { Router } from "../devDepencies.ts";
import { findColorAll, findColorById, createColor } from "../helpers/color.ts";

export const router = new Router()
.get("/api/colors", findColorAll)
.get("/api/colors/:id", findColorById)
.post("/api/colos", createColor)
