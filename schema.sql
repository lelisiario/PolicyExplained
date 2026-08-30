-- schema.sql

CREATE TABLE IF NOT EXISTS legislators (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    state TEXT NOT NULL,
    party TEXT NOT NULL,
    chamber TEXT NOT NULL,
    image_url TEXT
);

CREATE TABLE IF NOT EXISTS bills (
    id TEXT PRIMARY KEY,
    bill_number TEXT NOT NULL,
    congress INTEGER NOT NULL,
    title TEXT NOT NULL,
    summary TEXT,
    plain_english_summary TEXT,
    chamber TEXT NOT NULL,
    status TEXT NOT NULL,
    sponsor_id TEXT,
    introduced_date TEXT,
    update_date TEXT,
    FOREIGN KEY (sponsor_id) REFERENCES legislators(id)
);

CREATE INDEX IF NOT EXISTS idx_bills_chamber ON bills(chamber);
CREATE INDEX IF NOT EXISTS idx_bills_status ON bills(status);