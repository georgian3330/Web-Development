-- RENAME TABLE
ALTER TABLE student RENAME TO user;

-- CHANGING DATATYPE OF A TABLE COLUMN
ALTER TABLE user ALTER column first_name TYPE VARCHAR(20);

-- ADD NEW COLUMN IN A TABLE
ALTER TABLE contact_detail ADD email TEXT;

-- DELETE DATA FROM A TABLE
DELETE FROM <table_name> WHERE <some_condition>;

DELETE FROM visited_countries WHERE id = 1 AND country_code = 'FR';