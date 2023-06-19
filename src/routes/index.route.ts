import { Router } from "express";

const router = Router();

router.get("/api", (req, res) => {
  res.status(200).json({ status: "success", message: "Hello!" });
});

export default router;
