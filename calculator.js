const express=require("express");
const bodyParser = require("body-parser");
const app=express();

// To handle HTTP POST requests in Express.js version 4 and above, you need to install the middleware module called body-parser.

// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
//support parsing of application/x-www-form-urlencoded post data
//it also have bodyParser.json and .txt also 
//grab thte info that gets posted to your server from html form then use urlencoded 
//urlencoded:this trying to pass the data that comes from the html data form 
//extended true: allows us to pass nested objects too !!!
//by using body parser we are able to pass http requests and by urlencoded we can get access to data 
app.use(bodyParser.urlencoded({extended: true}));
//that is for sending the whole file to the browser
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    //that num1 comes from index.html 
    //here we need to typecast into number because it treated both the numbers as string 
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);

    var result=num1+num2;
    res.send("the result of the calculation is "+result);

});
app.listen(3000,function(){
    console.log("server gets started @ 3000 port!!!");
});
