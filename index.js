const express = require('express');
const app = express();
app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html"  );
});
app.use(express.static('INTERN PORGCTS'));

app.listen(3000,function(){
    console.log("sever is running in port 3000");
});
