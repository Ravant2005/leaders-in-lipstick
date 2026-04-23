import { Router, type IRouter } from "express";
import healthRouter from "./health";
import membersRouter from "./members";
import apiRouter from "./api";

const router: IRouter = Router();

router.use(healthRouter);
router.use(membersRouter);
router.use(apiRouter);

export default router;
