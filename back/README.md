# fullStackTask Back app

This project is for the next two challenges:

1. Write a nodejs express middleware:
   that only allows request to proceed if req has session and it's applicable only to all URLs that start with pub/proxy and api/proxy (for example pub/proxy/bpm/start or api/proxy/adu-ms/get).

Example: --> https://github.com/imsunilkulkarni/fullStackTask/tree/main/node_api-master

2. Write endpoint post and get express handler
   That is using middleware from previous question. For post /save/:id writes contents of request body that is JSON to file named id.json and on get reads file Id and serves back as JSON.

Example: --> https://github.com/imsunilkulkarni/fullStackTask/tree/main/node_api-master

# Project

##### The project was created from scrash

This project use the next technologies:

## Pdn libraries

1. NodeJs
2. "cors": "^2.8.5" -> For allow request from any server.
3. "dotenv": "^10.0.0" -> For manage the environment variables.
4. "express": "^4.17.1" -> NodeJs Framework for the back.
5. "express-session": "^1.17.2" -> For manage the session.
6. "morgan": "^1.10.0" -> For nice and complete log of the request.

## Development libraries

1. "ts-node-dev": "^1.1.8" -> To re-compile the type script project.
2. "typescript": "^4.4.4" -> To use the typescript technology.
3. "@types/cors": "^2.8.12", "@types/express": "^4.17.13", "@types/express-session": "^1.17.4", "@types/morgan": "^1.9.3", "@types/node": "^16.11.1" -> Typescript types used in the project.

# Front-end project

##### The project was auto-generated with the CLI for create React projects

The project use the react, react-dom and react-scripts libraries for work with React Components, Rout for managing the routes of the app.

Not used some use full libraries like RxJS, MaterialUI, etc for keep it simple and smart.

##### The command for create the project is:

command used npx create-react-app front
command used for add libraries: npm i react-router-dom bootswatch
