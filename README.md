# Documentation API Todo-Noval

Database : Mongodb

**Register**

* url : /register 
* method : POST 
* request body : Form Urlencoded { name, email, password }

**Login**

* url : /login 
* method : POST 
* request body : Form Urlencoded { email, password } 
* desc : you will get a token after login

**Get All Planning**

* url : /planning 
* method : get 

**Create Planning**

* url : /planning 
* method : POST 
* request body : Form Urlencoded { title, activity }

**Update Planning to Todo**

* url : /planning/:id 
* method : PUT 
* request header : token 
* desc : use your token

**Get All Todo**

* url : /todo 
* method : get 

**Update Todo to Doing**

* url : /todo/:id 
* method : PUT 
* request header : token 
* desc : use your token

**Get All Doing**

* url : /doing 
* method : get 

**Update Doing to Done**

* url : /doing/:id 
* method : PUT 
* request header : token 
* desc : use your token

**Get All Done**

* url : /done 
* method : get 

**Delete Todo**

* url : /delete/:id 
* method : DELETE 
* request header : token 
* desc : use your token
