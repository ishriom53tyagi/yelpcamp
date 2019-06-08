var express= require("express")
var app=express();
var bodyParser=require("body-parser");

var camp=[
    {title:"dogs",img:"https://i.stack.imgur.com/hOIuY.jpg"},
    {title:"himachal",img:"https://i.stack.imgur.com/CJT47.jpg"},
    {title:"patnitop",img:"https://i.stack.imgur.com/capu1.jpg"},
]    


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res)
{
    res.render("landing");
})

app.get("/campground",function(req,res)
{

res.render("campgrounds",{camp:camp});  
})


app.post("/campground",function(req,res)
{
    var name=req.body.name;
    var image=req.body.image;
    var newcampground={title:name,img:image};
    camp.push(newcampground);
    res.redirect("/campground");
});
app.get("/campground/new",function(req,res)
{
    res.render("new.ejs");
});

app.listen(process.env.PORT,process.env.IP,function()
{
console.log("server is been started");    
});
