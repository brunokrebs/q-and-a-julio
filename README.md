# Q & A App

This application was created to be used on the hands-on activity we send to candidates. The app contains two main folders:

- `frontend`: a small SPA built with React
- `backend`: a simple HTTP API built with NestJS

The instruction for the candidates can be found on the README files of each one of these folders:

- [Instructions for the frontend activity](./frontend/README.md).
- [Instructions for the backend activity](./backend/README.md).

Fullstack engineers are expected to do both activities 🙂

## Running the app

> **Note:** running the app is not a requirement of any of the activities. Feel free to run them though if you think
it will help you.

If you are interested in running the application, proceed as follows:

- Install the dependencies (i.e., `npm install` in each folder).
- Run PostgreSQL on a Docker container (command below)
- Run `npm run start:dev` from the `backend` folder
- Run `npm start` from the `frontend` folder

If you want to use something else then the command below to run PostgreSQL, go ahead. Just make sure you update the
environment variables (hardcoded somewhere) accordingly.

```bash
# running PostgreSQL on a Docker conatiner
docker run --name postgres \
    -p 5432:5432 \
    -e POSTGRES_DB=q-and-a \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -d postgres

# examples to start, stop, and remove
docker start postgres
docker stop postgres
docker rm postgres
```

## Useful commands

Some useful commands while playing with app:

```bash
# from the backend folder

## run the migrations
npx typeorm-ts-node-commonjs migration:run -d datasource.ts

## revert a migration
npx typeorm-ts-node-commonjs migration:revert -d datasource.ts

## create a new migration file
npx typeorm migration:create ./migrations/some-migration-name
```