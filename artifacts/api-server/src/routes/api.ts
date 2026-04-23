import { Router } from "express";
import { db, programsTable, eventsTable, resourcesTable, contactSubmissionsTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();

// Programs
router.get("/programs", async (req, res) => {
  try {
    const programs = await db.select().from(programsTable);
    res.json(programs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch programs" });
  }
});

router.get("/programs/:id", async (req, res) => {
  try {
    const program = await db.select().from(programsTable).where(eq(programsTable.id, parseInt(req.params.id))).limit(1);
    if (!program.length) return res.status(404).json({ error: "Program not found" });
    res.json(program[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch program" });
  }
});

// Events
router.get("/events", async (req, res) => {
  try {
    const events = await db.select().from(eventsTable);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// Resources
router.get("/resources", async (req, res) => {
  try {
    const resources = await db.select().from(resourcesTable);
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch resources" });
  }
});

// Contact Submission
router.post("/contact", async (req, res) => {
  try {
    const submission = await db.insert(contactSubmissionsTable).values(req.body).returning();
    res.status(201).json(submission[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to submit contact form" });
  }
});

export default router;
