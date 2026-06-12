CREATE TABLE capitals (
    id SERIAL PRIMARY KEY,
    country VARCHAR(50),
    capital VARCHAR(50),
);

-- Import the capitals.csv file

CREATE TABLE flags (
    id SERIAL PRIMARY KEY,
    country VARCHAR(50),
    flag TEXT
);

-- Import the flags.csv file