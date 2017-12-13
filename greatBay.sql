CREATE DATABASE GreatBay_DB;
 use GreatBay_DB;
 
 
CREATE TABLE Items (
    id INT NOT NULL AUTO_INCREMENT,
    items VARCHAR(45), 
    tasks VARCHAR(45), 
    jobs VARCHAR(45),
    PRIMARY KEY (id)
    );
 
 INSERT INTO Items(items, tasks, jobs)
 
VALUES ("Macbook Pro", "Build a website", "Tutor");
    
    select * from items;