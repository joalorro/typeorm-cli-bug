# Sample Repo for a Typeorm CLI bug

Steps to reproduce bug:

1. Create a Postgres database called bug
2. run `npm i` or `npm install`
3. run `npm run typeorm:migrate initial`
4. confirm the new migration has been created
5. run `node migration.js initial`
