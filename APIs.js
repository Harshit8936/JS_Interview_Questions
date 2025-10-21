// STATE LESS

/*
A stateless API treats each request as an independent transaction that is unrelated to any previous request. 

It does not maintain any server-side state or session information about the client or previous requests. 

Each request from the client to the server must contain all the necessary data for the server to process the request. 

The server does not store any context or session data between requests.

They are also more fault-tolerant because if one server instance fails, 
another instance can seamlessly handle the next request without any loss of context.



*/

// STATE FULL

/*
A stateful API maintains server-side state or session information related to each client or sequence of requests. 
The server stores data from previous requests and uses that data to influence the response to subsequent requests.

This state or session data can include user authentication, shopping carts, 
user preferences, or any other relevant information that needs to persist across multiple requests.


*/









/*
REST (Representational State Transfer) APIs are generally designed to be stateless, 
meaning they treat each request as an independent transaction and do not maintain 
any server-side state or session information between requests.

In a RESTful API, the client is responsible for managing the application state 
and sending all the necessary data with each request. 
The server processes the request and responds with the requested data or the appropriate action, 
but it does not store any state or context information related to previous requests.

*/

// You can surely make REST services stateful. But it goes against REST philosophy.



/*

npm ci vs. npm install Explained
npm ci: npm clean-install reads the package-lock.json file to determine the project’s package versions and dependencies. It will then fetch and install these identical versions from the npm registry without changing package-lock.json.
npm i: npm install searches the package.json file for a list of required packages and versions and then installs those Node.js packages and dependencies.

*/