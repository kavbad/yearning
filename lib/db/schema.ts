import {
  pgTable,
  uuid,
  text,
  timestamp,
  jsonb,
  integer,
  uniqueIndex,
} from "drizzle-orm/pg-core";
// M0 persistence contract; no database connection is needed by the M1 study.
export const users = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  createdAt: timestamp().defaultNow().notNull(),
});
export const sessions = pgTable("sessions", {
  id: uuid().primaryKey().defaultRandom(),
  ownerId: uuid()
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  state: text().notNull().default("landing"),
  createdAt: timestamp().defaultNow().notNull(),
});
export const sessionEvents = pgTable(
  "session_events",
  {
    id: uuid().primaryKey(),
    sessionId: uuid()
      .notNull()
      .references(() => sessions.id, { onDelete: "cascade" }),
    sequence: integer().notNull(),
    type: text().notNull(),
    payload: jsonb().notNull(),
    source: text().notNull(),
    timestamp: timestamp().defaultNow().notNull(),
  },
  (t) => [uniqueIndex("session_sequence").on(t.sessionId, t.sequence)],
);
export const sessionSnapshots = pgTable("session_snapshots", {
  sessionId: uuid()
    .primaryKey()
    .references(() => sessions.id, { onDelete: "cascade" }),
  lastAppliedSequence: integer().notNull(),
  scene: jsonb().notNull(),
  memory: jsonb().notNull(),
});
