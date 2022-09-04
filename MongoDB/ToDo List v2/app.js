//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');

  const itemsSchema = {
    name: String
  }

  const Item = mongoose.model('Item', itemsSchema);

  const item = new Item({
    name: "Start Leetcode"
  })

  const java = new Item({
    name: 'Learn Java'
  })

  const react = new Item({
    name: 'Practice React'
  })

  const defaultItems = [item, java, react]

  app.post("/", function (req, res) {


    const itemName = req.body.newItem;

    const item = new Item({
      name: itemName
    })

 

    item.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });


  });






  // const items = ["Buy Food", "Cook Food", "Eat Food"];
  // const workItems = [];

  app.get("/", function (req, res) {

    Item.find({}, function (err, foundItems) {

      if (foundItems.length === 0) {

        Item.insertMany(defaultItems, function (err) {
          if (err) {
            console.log('This is an error');
          } else {
            console.log('defaultItems was a Complete Success!')
          }
        });
        res.redirect("/");
      } else {
      res.render("list", {listTitle: "Today",newListItems: foundItems}),
        console.log(foundItems)
      }
    });
  })




    // Item.find({}, function(err, items){
    //   console.log(items.length);

    //  if (items.length === 0){
    //    console.log(defaultitems);

    //     additems.insertMany(defaultitems, function(err){
    //       if(err){
    //         console.log(err);
    //       } else {
    //         console.log("Successfully added items!");
    //    }
  };


  // const day = date.getDate();









  // app.get("/work", function (req, res) {
  //   res.render("list", {
  //     listTitle: "Work List",
  //     newListItems: workItems
  //   });
  // });

  // app.get("/about", function (req, res) {
  //   res.render("about");
  // });

  app.listen(3000, function () {
    console.log("Server started on port 3000");
  });
