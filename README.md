# welcome to Flight Service

## Project Setup
- clone the project in your local
- execute 'npm install' on the same path as your root directory of your downloaded project
- create a `.env` file in the root directory and add the following environment variables
- inside the 'config' folder create a new file `config.json`  and then add the following peice of code of json

```
{
  "development": {
    "username": "root",
    "password": "<Your DB PASSWORD>",
    "database": "YOUR_DB_LOGIN_NAME",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}


```

