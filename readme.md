# Samyroad Tech by Eneas Marín

SPA built in a MEVN stack with no database

## Installation

After cloning the repo it's needed to run both client and server, as the Express server provides the API to feed the client. 


#### Client
Navigate to client folder and run this npm command. Client should be running on localhost:8080 by default

```bash
npm run dev
```

#### Server
Navigate to server folder and the following command. Server should be running on localhost:8081 by default and serving what's inside the /dist folder of the client

```bash
node src/app.js
```


