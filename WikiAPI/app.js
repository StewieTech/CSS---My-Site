const bodyParser = require("body-parser")

//alot of code is written in mongoose refer to documentation
const mongoose = require("mongoose")

//route paramaters is within express
const express = require("express")
const app = express()
const { appendFile } = require("fs")
const { findSourceMap } = require("module")

app.set("view","engine")

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://StewieTech:test123@cluster0.j31m7ms.mongodb.net/WikiDB")

  const articleSchema = {
    title: String,
    content: String
  }

  const Article = mongoose.model("Article", articleSchema);

//   app.post("/articles", );

//   app.get("/articles", );

/////////////////////////Request tarteting every article

  app.route("/articles")
  .get(function (req, res) {
    Article.find(function(err, foundArticles) {
        if (!err) {
        res.send(foundArticles);
        console.log(foundArticles);
        } else {
            res.send(err);
        }
    });
  })


  .post(function(req, res) {
    console.log(req.body.title)
    console.log(req.body.content)

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });


    // this is mongoose 
    newArticle.save(function(err){
        if (!err) {
            res.send("This was a HUGE success!");
        } else {
            res.send("This was a tremendous failure!")
        } 
    })

}).delete(function(req, res){
    Article.deleteMany(function(err){
        if (!err) {
            res.send("Delete was a Succes!") 

        } else {
            res.send("We failed horribly :(")
        }
    })
})

 /////////////////////////Request tarteting specific article 

 app.route("/articles/:articleTitle")

 .get(function (req, res) {
     
    Article.findOne({title: req.params.articleTitle}, function(err, foundArticle) {
        if (foundArticle) {
            res.send(foundArticle);

        } else {
            res.send("No article was found :(")
        }
    })

})

.put(function(req, res) { 
    Article.updateMany(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err) {
            if(!err) {
            res.send("Successfully Updated!");
        }        
    })
})

.patch(function(req, res) {
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err) {
            if(!err){
                res.send("Success has been patched!!")
            }
        }
    )
})

.delete(function(req, res) {
    Article.deleteOne(
        {title: req.params.articleTitle},
        function(err) {
            if (!err) {
                res.send("You specifically deleted What you Wanted!!")
            }
        }
    )
})







// app.delete("/articles", )



}

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
console.log("Server started on port 3000");
});
