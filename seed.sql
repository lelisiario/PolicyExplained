INSERT INTO legislators (id, name, state, party, chamber, image_url) VALUES
('L000001', 'Jane Doe', 'CA', 'Democrat', 'House', ''),
('L000002', 'John Smith', 'TX', 'Republican', 'Senate', '');

INSERT INTO bills (id, bill_number, congress, title, summary, plain_english_summary, chamber, status, sponsor_id, introduced_date, update_date) VALUES
('hr123-118', 'H.R. 123', 118, 'Clean Energy Accessibility Act', 'A bill to expand solar energy tax credits.', 'Makes solar panels cheaper for everyday homeowners.', 'House', 'Passed', 'L000001', '2026-08-01', '2026-08-15'),
('s456-118', 'S. 456', 118, 'Digital Privacy Protection Act', 'A bill to enforce strict consumer data privacy standards.', 'Stop companies from selling your online data without permission.', 'Senate', 'In Committee', 'L000002', '2026-08-10', '2026-08-20');