import { pgTable, text, serial, timestamp, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const programsTable = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(), // Leadership Development, Personal Branding, etc.
  description: text("description").notNull(),
  overview: text("overview"),
  objectives: text("objectives"),
  targetAudience: text("target_audience"),
  duration: text("duration"),
  outcomes: text("outcomes"),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertProgramSchema = createInsertSchema(programsTable).omit({ id: true, createdAt: true });
export type InsertProgram = z.infer<typeof insertProgramSchema>;
export type Program = typeof programsTable.$inferSelect;
