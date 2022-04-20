# Express App
Project for testing out/practicing Express Setup

Project used MySQL via Docker Compose.

Sequelize (ORM) setup to handle database management.
https://sequelize.org/v5/manual/
https://stackabuse.com/using-sequelize-orm-with-nodejs-and-express/

Basic Endpoints have been setup:
- Posts: get and create posts
- Users: create a new user
- Auth: authenticate

Basic Models have been setup:
- Posts: posts
- Users: USERs

Posts has many to one relationship with Users (Posts belongs to Users).


## Docker MySQL Setup:
https://github.com/joepk90/docker-sql-server

To start the MySQL Server:
docker-compose up -d

To login to the Docker instance
docker exec -it express_app_mysql_server /bin/bash


## Seed
npm run seed