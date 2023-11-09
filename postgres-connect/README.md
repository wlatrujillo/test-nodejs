# Postgres Connect

# Insert data from csv file to postgres table

## Install Dependences 
```
npm install
```

## Environment variables
Create .env file on the root project
.env
```
user=postgres,
password=your-password,
host=localhost,
port=5432,
max=5
```

## Exec load data

```
node index -f your-file.csv
```