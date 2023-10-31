Client Service Architecture :-

Client -The client can be any computer or process that requests something from the server. For example – visiting any website we request the webpage from its domain. So here we act as a client.

Server – On the other hand, the Server is the computer or process that is designed to serve the requests to the client. Server recieve request from client over the network and process it and do some data manipulation and then 
send response to the client.

*A server can be also a client. For example - To use the mongodb in our local system we need to bootup mongodb server in our local machine on port 27017. So when we want any data from mongodb database then we send request from 
our express server to mongodb server and mongodb server process this request and and send response accordingly.
Here my express server is acting as a client.

Client/server messages are exchanged via the TCP protocol until the connection is complete. TCP protocol determines how data should be distributed in packets that networks will deliver, transfers packets to and receives packets from networks, and manages flow control or retransmission of garbled and dropped packets.

How communication Happens - 
If any client wants some data with any server then it first asks for the IP address for the particular server from the DNS (Domain name System). The DNS server responds with the IP Address.
To that IP Address, the client sends the request to the particular server with the port number that is specified to the particular application, and then the server responds. The response message receives by the client and based on the port number, the response packet is consumed by the application to which it belongs.
Here at a very high level, the communication between the client and server happens over the HTTP packets.

API(Application Programming Interface) :-
API is way to expose your service or piece code for others so that then can use it. Like in js we use setTimeout and document.getElementsById() these are nothing but browser api. We dont about their implementaion but we know how
to use it. Example in make my trip we use flights api to fetch flight details instead of directly accessing their db and business logic.

FrameWork and Library - 


REST API (Representational State Transfer) - Nothing just architecture or set of guidelines which is used to make good software or application. And the api that follows these guidlines called REST API.
It means when a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.
Others architecture - SOAP, GRPC, GRAPHQL.

Resource- Can be anything about which API provides information. Like in Ecommerce a user, product, comments, are resource.

Thsese are some guidlines - 
1-  To send data over the network in client server architecture http protocol shoul be used.
2- Data should travel over the network in the form of JSON.
3- REST decides how a URL should looks like.
a. URL endpoint should contain resources(noun) not action.
   https://flipkart.com/products.
b. URL should contains plural noun.
   https://flipkart.com/users not user

4- URL end points should be associated with HTTP methods
   https://products GET
   https://products/:id GET
   https://products  {req body} POST
   https://prodcuts DELETE
   https://products/:id PUT    

5- We use nesting for relationship between resources.
   want to get all review of a particular product.
   http://products/:id/reviews

6- api versioning should be done.
   v1/products/:id
   after changing some functionality or logic in server code.
   v2/products/:id

7- In REST architech we can send data in three ways - 
   body - {}
   url params - v1/products/:productid
   query params - v1/products?name=phone&range=15000     