-- D1 schema for the self-check counter and contact requests (database: clevel-site-db)
CREATE TABLE IF NOT EXISTS counters (id TEXT PRIMARY KEY, n INTEGER NOT NULL DEFAULT 0);
INSERT OR IGNORE INTO counters (id, n) VALUES ('self_check', 0);
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  lang TEXT, name TEXT NOT NULL, company TEXT, email TEXT NOT NULL, phone TEXT, note TEXT,
  verdict TEXT, summary TEXT, consent INTEGER NOT NULL DEFAULT 0, ip_hash TEXT, notified INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS leads_ip_time ON leads (ip_hash, created_at);
