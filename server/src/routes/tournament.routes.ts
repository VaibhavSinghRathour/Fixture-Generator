import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Tournament route is working"
  });
});

export default router;