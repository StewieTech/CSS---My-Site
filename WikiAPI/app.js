const bodyParser = require("body-parser")
const mongoose = require("mongoose")
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


  app.get("/articles", function (req, res) {
    Article.find(function(err, foundArticles) {
        if (!err) {
        res.send(foundArticles);
        console.log(foundArticles);
        } else {
            res.send(err);
        }
    });
  });


}

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
console.log("Server started on port 3000");
});
