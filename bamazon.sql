
-- CREATE database bamazonDB;

Use bamazondb;

CREATE TABLE Products (
ItemID INTEGER AUTO_INCREMENT NOT NULL,
ProductName VARCHAR(100) NOT NULL,
DepartmentName VARCHAR(40) NOT NULL,
Price DECIMAL(9,2) NOT NULL,
StockQuantity INTEGER NOT NULL,
PRIMARY KEY (ItemID)
);

SELECT * FROM Products;

INSERT INTO Products (ProductName, DepartmentName,Price, StockQuantity) 
VALUES ('Foundation','Beauty&Care', 10.55, 8);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES ('Lipstick','Beauty&Care', 25.00, 15);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES ('Designer Handbags','Shoes&Bags', 2.00, 8);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES ('Designer Shoes','Shoes&Bags', 759.99, 5);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES ('Hangover Part III','Movies', 11.25, 8);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES ('Forrest Gump ','Movies', 19.99, 6);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES ('Hello by Adele','Music', 12.99, 25);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES ('Melody AM - Royksopp','Music', 9.99, 2);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES ('Notebook Pro','Computers', 1590.15, 7);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
VALUES ('Notebook Basic','Computers', 499.95, 10);
