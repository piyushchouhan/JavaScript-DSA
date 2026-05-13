SELECT columns
FROM table1
JOIN table2
ON table1.id = table2.id
WHERE condition
ORDER BY column
LIMIT number;


INNER JOIN return only the records that have matching values in both tables.
LEFT JOIN returns all records form the left table matching ones form the right table.
RIGHT JOIN returns all records from the right table and matching records from the left table.
FULL JOIN returns all records when there is a match in either table.
SELF JOIN is a join where a table is joined with itself to compare rows within the same table.
CROSS JOIN returns the cartesian product of the two tables, pairing each row from one table with all the rows from the other table.

SELECT column1, column2
FROM table1
LEFT JOIN table2
ON table1.id = table2.id
WHERE table2.id IS NULL;

SQL FULL JOIN 
The sql FULL JOIN  keyword returns all records from both tables, with nulls where there is no match.

SELECT column1, column2
FROM table1
FULL JOIN table2
ON table1.col_name = table2.col_name;

SQL SELF JOIN
A SELF JOIN in SQL is a regular join where a table is joined to itself. This is useful for comparing rows within the same table.

SQL CROSS JOIN 
A CROSS JOIN in SQL returns the Cartesian product of the two tables, A Caretesian product means every row from the first table
is combined with every row from the second table, producing all possible row combinations.

WE can join more than two tables by chaining multiple JOIN clauses together.
EACH JOIN matches rows based on a related column between tables.

SELECT colmun
FROM table1
JOIN table2 ON table1.column = table2.column
JOIN table3 ON table2.column = table2.column

WHERE filters individual roww before grouping and aggregation. Having filters the resulting groups after GROUP BY, so it's meant for conditions on aggregated.

