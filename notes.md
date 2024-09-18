# ExpressJS

## Web Applications

- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and movile applications.
- ExpressJS is an open source it is developed and maintained by NodeJS foundation.
- It is a tool that simplyfies building of web applications and API's using javascript on the server side.
- It is a light-weight and flexible framework which provides different middleware options to easily handle request, response and routes to create a scalable application.
- Features of ExpressJS:

1. `Middleware and Routing`: Define clear pathways (routes) within your application to handle incomming HTTP requests (GET, POST, PUT, DELETE) with ease. Implement reusable functions (middleware) to intercept requests and create responses, adding functionalitlies like authentication, logging, and data parsing.
2. `Minimalistic Design`: Express.js follows a simple and minimalistic design philosophy. This simplicity allows you to quickly set up a server, define routes, and handle HTTP requests efficiently. It's an excellent choice for building web applications without unnecessary complexity.
3. `Flexibility and Customization`: Express.js doesn't impose a strict application architecture. You can structure your code according to your preferences. Whether you're building a RESTful API or a full-fledged web app, Express.js adapts to your needs.

## Applications of Express

- Routing
- Middlewares
- Static file serving
- Template Engines
- Database Integration
- flexibility
- Scalability
- Easy to debug
- Big Community
- RESTfull APIs
- Security
- Cross Origin Resource Sharing (CORS)
- Single Page Application

#### install

```
npm i express
```

#### use

```
const express = require("express");

// creating server
const app = express();

// listening to the server
app.listen(PORT, hostname, () => {});
```

### Creating APIs

#### Syntax

<img src="https://i.ibb.co/HtzCY7J/2024-09-18-12-11-45-AI-Eraser.png" />

#### Example

```
app.get("/", (req, res) => {
    // logic to handle the request & response
})
```

## Request Object:

- In Express.js, the request object is an instance of the http.IncommingMessage object from Node.js, augumented with additional properties and methods by Express.
- This object contains all the information about the HTTP request made by the client.

### Properties:

1. `req.app`: The app prpeprty holds a reference to the Express application that is using the middleware. Type: object
2. `req.baseUrl`: The URL path on which a router instance was mounted. Type: string
3. `req.body`: Contains key-value pairs of data submitted in the request body. By default, it is undefined. Middleware like body-parse or express.json() is needed to populate this property. Type: object
4. `req.cookies`: When using the cookie-parser middleware, this property contains cookies sent by the client. Type: object
5. `req.hostname`: Contains the hostname derived from the Host HTTP header. Type: string
6. `req.ip`: The remote IP address of the request. Type: string
7. `rej.method`: The HTTP method of the request (e.g., GET, POST). Type: string
8. `req.params`: Contains route parameters, captured in the URL pattern of the route. Type: object
9. `req.path`: The request path (excluding the query string). Type: string
10. `req.protocol`: The request protocol (http or https). Type: string
11. `req.query`: An object containering a property for each query string parameter. Type: object
12. `req.route`: The currently matched route. Type: object
