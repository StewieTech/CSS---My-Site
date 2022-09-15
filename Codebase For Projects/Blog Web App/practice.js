//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();
const _ = require('lodash');

app.set('view engine', 'ejs');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

main().catch((err) => console.log(err));


async function main() {
  await mongoose.connect("mongodb+srv://StewieTech:test123@cluster0.j31m7ms.mongodb.net/WebBlog")

// const postSchema = {
//   title: String,
//   body: String
// };

// const Post = mongoose.model("Post", postSchema);

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);


const defaultItems = [homeStartingContent, aboutContent, contactContent];


// let posts = [];








app.get('/', function(req, res) {
  res.render("home", {
    SweetText: homeStartingContent,
    postsAll: posts,
  });
});

app.get('/about', function(req, res) {
  res.render("about", {
    SweetAbout: aboutContent,
  });
});

app.get('/contact', function(req, res) {
  res.render("contact", {
    SweetContact: contactContent,
  });
});


app.get('/compose', function(req, res) {
  res.render("compose");
});



app.post('/compose', function(req, res) {
 

  // Here's where my break is
  // const post = new Post({
  //   title: req.body.postTitle,
  //   body: req.body.postBody
  // });

  // post.save(function(err){
  //   if (!err){
  //     res.redirect("/");
  //   }
  // });

  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });


  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });



  // console.log(postTitle)
  // Old but works, need to push to MongoDB
  // const post = {
  //   title: req.body.postTitle,
  //   body: req.body.postBody
  // };

  // posts.push(post);




  // console.log(postAll);
  // console.log(req.body.postBody);

  // console.log(req.body.postTitle)
  // console.log("testing!")

  // postTitle.push(post);
  // postBody.push(post);

   // let postTitle = req.body.postTitle
  // let postBody = req.body.postBody


});





app.get('/posts/:testing', function(req, res) {
  let urlTitle = _.kebabCase(req.params.testing);
  // let body = posts[i].title;

  console.log(urlTitle);
  console.log("Is equal to");
  console.log(posts[0].title);
  console.log("JUST TO MAKE SURE");


  posts.forEach(function(post) {
    const postTitle = _.kebabCase(post.title);
    if (postTitle === urlTitle) {
          console.log("Match Found");
          res.render("post", {
            title: post.title,
            body: post.body
            });

            image.png

          }
    });
  });

  // res.send(req.params);




  //   else {
  //     console.log("Not a Match!");
  //   }


// // if test = req.body.title {

// // }
// res.redirect("/");


  // for (var i = 0; i < posts.length; i++) {
  //   postTitle = _.kebabCase(posts[i].title)
  //   if (postTitle === urlTitle) {
  //     console.log("Match Found");
  //     res.render("post", {
  //       title: postTitle,
  //       body: posts[i].body
  //       // content: post.body
  //     });

}


  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 3000;
  }

app.listen(port, function() {
  console.log("Server started on port 3000");
});
