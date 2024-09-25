# ExpressJS

## Web Applications

- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and movile applications.
- ExpressJS is an open source it is developed and maintained by NodeJS foundation.
- It is a tool that simplyfies building of web applications and API's using javascript on the server side.
- It is a light-weight and flexible framework which provides different middleware options to easily handle request, response and routes to create a scalable application.
- Features of ExpressJS:

  1.  **Middleware and Routing**: Define clear pathways (routes) within your application to handle incomming HTTP requests (GET, POST, PUT, DELETE) with ease. Implement reusable functions (middleware) to intercept requests and create responses, adding functionalitlies like authentication, logging, and data parsing.
  2.  **Minimalistic Design**: Express.js follows a simple and minimalistic design philosophy. This simplicity allows you to quickly set up a server, define routes, and handle HTTP requests efficiently. It's an excellent choice for building web applications without unnecessary complexity.
  3.  **Flexibility and Customization**: Express.js doesn't impose a strict application architecture. You can structure your code according to your preferences. Whether you're building a RESTful API or a full-fledged web app, Express.js adapts to your needs.

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

### Request Object:

- In Express.js, the request object is an instance of the http.-
- IncomingMessage object from Node.js,augmented with additional properties and methods by Express.
- This object contains all the information about the HTTP request made by the client.

#### Properties:

1. **req.app**: The app property holds a reference to the Express application that is using the middleware.
   Type: object

2. **req.baseUrl**: The URL path on which a router instance was mounted.
   Type: string

3. **req.body**: Contains key-value pairs of data submitted in the request body. By default, it is undefined. Middleware like body-parser or express.json() is needed to populate this property.
   Type: object

4. **req.cookies**: When using the cookie-parser middleware, this property contains cookies sent by the client.
   Type: object

5. **req.hostname**: Contains the hostname derived from the Host HTTP header.
   Type: string

6. **req.ip**: The remote IP address of the request.
   Type: string

7. **req.method**: The HTTP method of the request (e.g., GET, POST).
   Type: string

8. **req.params**: Contains route parameters, captured in the URL pattern of the route.
   Type: object

9. **req.path**: The request path (excluding the query string).
   Type: string

10. **req.protocol**: The request protocol (http or https).
    Type: string

11. **req.query**: An object containing a property for each query string parameter.
    Type: object

12. **req.route**: The currently matched route.
    Type: object

### Response Object:

- In Express.js, the response object is an instance of the http.
- ServerResponse object from Node.js, augmented with additional properties and methods by Express.
- This object is used to send back the desired HTTP response to the client.

1. **res.attachment([filename])**: Sets the Content-Disposition header to "attachment" to prompt the user to download the file.

   - **Parameter**:
     - **filename (string)** - Optional. The name of the file to download.

2. **res.cookie(name, value [, options])**: Sets a cookie with the specified name and value.

   - **Parameters**:
     - **name (string)** - The name of the cookie.
     - **value (string or object)** - The value of the cookie.
     - **options (object)** - Optional. Options for the cookie.

3. **res.clearCookie(name [, options])**: Clears the cookie specified by name.

   - **Parameters**:
     - **name (string)** - The name of the cookie to clear.
     - **options (object)** - Optional. Options for clearing the cookie.

4. **res.download(path [, filename] [, options] [, fn])**: Transfers the file at path as an "attachment", prompting a file download.

   - **Parameters**:
     - **path (string)** - The file path.
     - **filename (string)** - Optional. The name of the file to download.
     - **options (object)** - Optional. Options for the download.
     - **fn (function)** - Optional. A callback function.

5. **res.end([data] [, encoding] [, callback])**: Ends the response process.

   - **Parameters**:
     - **data (string or buffer)** - Optional. Data to send as the response body.
     - **encoding (string)** - Optional. The encoding of the data.
     - **callback (function)** - Optional. A callback function.

6. **res.get(field)**: Returns the value of the specified HTTP response header field.

   - **Parameter**:
     - **field (string)** - The name of the header field.
     - **Returns**: The value of the header field.

7. **res.json([body])**: Sends a JSON response.

   - **Parameter**:
     - **body (object)** - Optional. The response body.

8. **res.links(links)**: Sets the Link HTTP header with the provided links.

   - **Parameter**: links (object) - An object of links.

9. **res.location(path)**: Sets the Location HTTP header to the specified path.

   - **Parameter**: path (string) - The location URL.

10. **res.redirect([status,] path)**: Redirects the request to the specified URL with an optional status code.

    - **Parameters**:
      - **status (number)** - Optional. The HTTP status code.
      - **path (string)** - The URL to redirect to.

11. **res.render(view [, locals] [, callback])**: Renders a view and sends the HTML as the response.

    - **Parameters**:
      - **view (string)** - The name of the view to render.
      - **locals (object)** - Optional. Local variables for the view.
      - **callback (function)** - Optional. A callback function.

12. **res.send([body])**: Sends the HTTP response.

    - **Parameter**:
      - **body (string, buffer, or object)** - Optional. The response body.

13. **res.sendFile(path [, options] [, fn])**: Sends a file as an octet stream.

    - **Parameters**:
      - **path (string)** - The file path.
      - **options (object)** - Optional. Options for sending the file.
      - **fn (function)** - Optional. A callback function.

14. **res.sendStatus(statusCode)**: Sets the HTTP status code and sends the status as the response body.

    - Parameter: statusCode (number) - The HTTP status code.

15. **res.set(field [, value])**: Sets the response header field to the specified value, or sets multiple fields if an object
    is passed.

    - **Parameters**:
      - **field (string or object)** - The name of the header field or an object of header fields.
      - **value (string)** - Optional. The value of the header field.

16. **res.status(code)**: Sets the HTTP status for the response.
    - Parameter: code (number) - The HTTP status code.

## HTTP

- Hypertext Transfer protocol (HTTP) is an application layer protocol for transmitting hypermiedia documdngs such as HTML.
- It was designed for communication between web browser and web servers, but it can also be used for other purposes.
- It is the man way web browsers on a servers communicate to share information on the internet.

> HTTP work shop is a request response system when the client asks information and server request for data.

## API

- API (Application Programming Interface) is a set of rule or protocoles that enables software applications to communcate with each other to exchange dta features and functionality.

## Rest API

- (Representation State Transfer API) is also known as restfull API is a application programming interface that follows design principles of rest architecture.
- Rest API provide flexible lightweight way to interogate web application and to connect components a microservices architecture.

## HTTP Header

- HTTP headers let the client and server pass additional information with a HTTP request or response an HTTP header consists of its case insensitive name follows by a colon(:) then by its value.

- HTTP headers are of 4 types

  1.  request headers
  2.  response headers
  3.  general headers
  4.  entity headers

1. **request headers**: These type of http headers stores information about clients fetch request.
2. **response headers**: This header is use to store the information about server responses like status code.
3. **general headers**: This headers are applied to both request and response.
4. **entity headers**: They are the info about the data like content length and content type.

#### Example

- content type
- content length
- cross origin
- status code
- url
- date
- modifieof
- cookies
- authorization

## HTTP Methods

- HTTP method typically associated with Restful wb development and hypertext transfer protocol and most commonly used by Restful api, designers:

  1.  GET
  2.  PUT
  3.  POST
  4.  DELETE
  5.  PATCH
  6.  HEAD
  7.  OPTIONS
  8.  TRACE
  9.  CONNECT

## Q1. What is the difference between create method and post method in rest API

## Q2. What is the difference between post and put method

## HTTP status code

- HTTP response status codes indicate wheather a specific HTTP request has been successfully completed.
- These are some 3 digits code send by the servers to the clients according to the request.

- Status Codes are divided into 5 classes

  1.  Information responses (100 - 199)
  2.  Successfull codes (200 - 299)
  3.  Re-directional codes (300 - 399)
  4.  Client-side Error (400 - 499)
  5.  Server-Side Error (500 - 599)

- 100 - continue
- 101 - switching protocol
- 200 - ok
- 201 - created
- 202 - accepted
- 204 - no-context
- 301 - moved permanently
- 302 - found
- 304 - not modified
- 400 - bad request
- 401 - unauthorized
- 403 - forbidden
- 404 - not found
- 402 - request required
- 408 - request timeout
- 500 - internal server error
- 502 - bad getway
- 503 - service unavailable

The content-type header is to indicate the media type of the resource the media type is a string along with the file indicating the format of the file.

- text/plain (plain text file)
- text/html (html files)
- text/css (css files)
- text/javascript (js files)
- application/json (json delete)
- application/xml (delete)
- image/png (png image)
- image/ipg (jpg image)
- application/pdf (pdf files)
- application/x-www-formation coded (url data)
- video/mp4 (mp4 video)
- multipart/form-data (formdata/file uploading)

## Express Middleware

- ExpressJS Middleware are some functions that invoked by the express server routing layer before the final response.
- Express.js middleware consists of functions with access to the request object (req), the response object (res) and a special function called "next".
- These functions can modify the request and response object terminate the request-response cycle or pass ccontrol to the next middleware in the stack.
- As per the name middleware functions execute between the initial request and the final response, in stack middlewares execute by the sequence of there declaration in the program

<img src="https://i.ibb.co/3dXttt4/2024-09-20-11-54-12-AI-Eraser.png">

#### Sytax

```
app.use('path', (req, res, next) => {})
app.method('path', (req, res, next) => {})
```

- Each middleware function has the access to request object, response object and next function.
- The next function in a middleware use to call or execute the next middleware function if there is any.

### Advantages of Middleware Function

- **Modularity**: Middleware allows developers to modularize and organize code by breaking down the application logic into smaller, manageable functions.
- **Request-Response Processing**: Middleware functions can intercept and modify both incoming requests and outgoing responses, enabling tasks such as authentication, logging, and data validation.
- **Extensibility**: Developers can easily extend and enhance the functionality of an application by adding or removing middleware functions.
- **Reusability**: Middleware functions are reusable components that can be applied to different routes or across multiple applications, promoting code reuse.
- **Error Handling**: Middleware can handle errors globally or for specific routes, improving the overall robustness of the application.

## Middleware Chaining

<img src="https://i.ibb.co/zQLdxgh/2024-09-20-12-14-27-AI-Eraser.png">

- Middleware can be chained from one to another, Hence creating a chain fo functions that are executed in order.
- The last function sends the response back to the browser.
- So, before sending the response back to the browser the different middleware processes the request.
- Middleware are 5 types:

  1.  Application Level Middleware
  2.  Router Middelware
  3.  Error-Handling Middleware
  4.  Inbuilt Middleware
  5.  Third Party Middleware

### Application Level Middleware

- Application Level Middleware bound to the entire application using `app.use()` or `app.METHOD()` and executes for all routes the matching routes.

```
const express = require("express");
const app = express();
const port = 5000;

// middleware
const m1 = (req, res, next) => {
  console.log("middleware 1");
  next();
};
const m2 = (req, res, next) => {
  console.log("middleware 2");
  next();
};
app.use("/", m1, m2);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
```

### Router Level Middleware

- Router-level middleware is specific to a particular route or group of routes.

- It is applied using `app.use()` or within a specific router.
- Router-level middleware are used for spliting the routes into a different page these works in the same way as application level middleware but these are bound to the instance of `express.Router()`.

#### Syntax

```
const router = express.Router();
app.use('path', router)
router.use('path', (req, res, next) => {})
router.method('path', (req, res, next) => {})
```

```
const express = require("express");
const app = express();
const port = 5000;

// router-middleware
const userRouter = express.Router();
app.use("/user", userRouter);

userRouter.get("/virat", (req, res) => {
  res.send({ name: "Virat", age: 20 });
});

userRouter.get("/rohit", (req, res) => {
  res.send({ name: "Rohit", age: 25 });
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
```

### Error-handling middleware

- Handles errors during the request-response cycle.
- Defined with four parameters (err, req, res, next).

#### Syntax

```
app.use((error, request, response, next) => {
  // logic to handle the error
})
```

```
const express = require("express");
const app = express();
const port = 5000;

// error-handling middleware
app.get("/", (req, res) => {
  throw "something went wrong";
});

app.use((error, req, res, next) => {
  res.send("service unavailable");
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
```

### In-built Middleware

- In built Middleware are some pre-defined methods provided by the express library to achieve different functionalities.
- Some of the inbuilt middleware:

#### Example

```
express.static()
express.json()
express.urlencoded()
express.cookieparser()
express.cors()
express.session()
```

### express.static()

- This middleware use to provide static files like HTML, CSS, images and JS file to the server from a directory.

#### Syntax

```
app.use(express.static('folderPath'))
```

### express.json()

- This middleware use to parse the incomming JSON request.
- It makes the JSON data available for `req.body` property.

### Syntax

```
app.use(express.json())
```

### express.urlencoded()

- This middleware use to except the incomming URL data in the request object.

#### Syntax

```
app.use(express.urlencoded({extended: true}))
```

### Third Party Middleware

- Express allows a server to use third party libraries or packages from npm library to extend the server functionalities.

### Benifit of using Third Party of Middleware

1. Improving performance.
2. Secure data communication.
3. Database and network connection.
4. Better authentication and authorization.

## Some of the popular third party middleware

### 1. body-parser

- This is use to parse the body of requests which have payloads attached to them.

#### install

```
npm i body.parser
```

#### use

```
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
```

### 2. cookie-parser

- It parses Cookie header and populate req.cookies with an object keyed by cookie names.

#### install

```
npm i cookie-parser
```

#### use

```
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```

### 3. cors

- This library use to solve the cors policy error of a server.

#### install

```
npm i cors
```

#### use

```
const cors = require('cors');
app.use(cors());
app.use(cors({origin: 'url'}))
```

### 4. morgan

- Console the http requests.

### 5. helmet

- Set headers.

## Template Engines

- One of the key features of Express is its ability to integrate with template engines, allowing developers to dynamically generate HTML pages with data from their server.
- A template engine facilitates you to use static template files in your applications.
- At runtime, it replaces variables in a template file with actual values and transfroms the template into an HTML file sent to the client.
- Example of some popular template engines:
  - eco
  - ect
  - ejs
  - haml
  - haml-coffee
  - handlebars
- Using ejs as a template engine (Embedded Javascript)

#### install

```
npm i ejs
```

#### use

```
app.set('view engine', 'ejs'); (setting the template engine)
app.set('views', directoryPath)

directoryPath => default views folder
```

#### Response

```
res.render(fileName, data)

fileName => ejs filename
data => { key: values, ... }
```

#### Variables

```
<%= varName %>
```

#### Condition

```
<% if(condition){ %>

<% } %>
```

#### Array Method

```
  <% array.method((element) => { %>
    // statement
  <% }); %>
```

#### Partials

```
<%- include('path', data) %>
```
