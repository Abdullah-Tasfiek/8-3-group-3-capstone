# Table for Two  

Group members: Abdullah, Hermanclyde, Edwin, Charlie  

## Important Links

- [Deployed API Server](https://table-for-two-fspp.onrender.com/)
- [Deployed Frontend](https://table-for-two-fspp.netlify.app/)
- [ERD](https://miro.com/welcomeonboard/YnVXSnZvTlhwb2F3QTBraUpRNk5yY3c4NE80ejV1Tkk0aEd4QklTWmpwUGdxYWViQ0VjZWdRcDl2V2I3azRLU3wzNDU4NzY0NTE2MDUxNjI4OTA0fDI=?share_link_id=967288889386)
- [Wireframes](https://drive.google.com/drive/folders/11DC6EPNxv3BIedICKvRV54irdkBUtvnw?usp=sharing)
- [Systems Design Diagram](https://miro.com/welcomeonboard/NTNEMWFlUWkwem5JN1g3Q1FGdFpNam9lajQwelFmM1FvaWFuMzYzOTFDMFNUZVBJS0FjaE45UmhKSUY0b3k4Z3wzNDU4NzY0NTE2MDUxNjI4OTA0fDI=?share_link_id=836752356988)

## Overview
Find your potential partner through your diet! Table For Two is a web application that allows users to find a partner based on ones diet. Food is an important part of a relationship so this project helps people match with a partner who has their preferred diet or eats similar foods.

## Local Setup

If you'd like to run my project locally, please read the following steps:

1. Fork and clone this repository.

### Backend Setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your back-end

- `cd back-end`
- `touch .env`

**.env**

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=capstone
```

- `npm install` - install npm packages listed in `package.json`
- `npm install -g nodemon` - install nodemon to help run the backend
- `npm run db:init` - initialize a new database and create tables
- `npm run db:seed` - seed the table(s) with some data
- `nodemon` - starts running the backend server and confirm that this is running on port 3333
- Visit http://localhost:3333/users and make sure you see user data in the form of JSON 

### Frontend Setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your front-end

- `cd front-end`
- `touch .env`

**.env**

```
REACT_APP_API_URL=http://localhost:3333
```

- `npm install` - install npm packages listed in `package.json`
- `npm start` - make sure your React app can start

## Inspiration
The main inspiration for this project stems from making ones dietary restrictions included in the dating ecosystem. For example, if someone can only eat Halal foods or must have a gluten-free diet. They should find another person who matches their similar diet. Diets can affect your health, social interaction, and finances. Finding a partner who shares a similar diet can combine the two lifestlyes more seamlessly. Also if someone wants to find a partner that eats a specific diet, or any diet can be found through the application.




