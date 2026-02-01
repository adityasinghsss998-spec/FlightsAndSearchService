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

b
```
- once you have added your db config as listed before , execute `npx sequelize db:create`
and then eexecute
`npx sequelize db:migrate`
```

## DB design
- airplane table
- flight
- Airport
- City

- A flight belongs to an aeroplane but one airplane cna be used in multiple flights
- One Airport can have many flighs, but a floght belongs to one airport
## Tables
### City -> id,name,createdAt,updated At
### Airport -> id,anme,addresss,reated_at,updated_at
   Relationship-> City has many airports and AIrport belongs to a city(one to many)
```npx sequelize-cli model:generate --name Airport --attributes name:String,address:String,cityId:integer  ```
