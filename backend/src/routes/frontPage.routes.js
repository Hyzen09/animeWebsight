import { frontpage } from "../controllers/frontpage.controller.js";
import { Router } from "express";

const router = Router()

router.route("/").get(frontpage)

export default router