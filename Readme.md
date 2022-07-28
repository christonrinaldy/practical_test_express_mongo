1. Make sure to have Node version >= v14.0.0, Mongo, installed on your machine
2. Create .env file and follow the variables on example.env
3. On this project, you can set the Mongo url connection on .env at DB_URI or it will be dafault set on mongodb://127.0.0.1:27017/
4. To create database and collections, you can import the DUMP file or on project's directory run:
    - npm run db:migrate
    - npm run db:seed
5. Run npm start