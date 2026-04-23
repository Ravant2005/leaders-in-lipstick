import { Router } from "express";
import { db } from "@workspace/db";
import { membersTable } from "@workspace/db";

const router = Router();

router.get("/members", async (req, res) => {
  try {
    const members = await db.select().from(membersTable);
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch members" });
  }
});

export default router;
