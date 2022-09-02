
//require the Mongoose package (after running >npm i mongoose in Hyper to install it)
const mongoose = require('mongoose');



//connect to MongoDB by specifying port to access MongoDB server
// main().catch(err => console.log(err));


mongoose.connect('mongodb://localhost:27017/FruitsDB')


const fruitSchema = new mongoose.Schema({ 
    name: String,
    rating: Number,
    review: String
});

// Create a Model
const Fruit = mongoose.model('Fruit', fruitSchema);

// Creating a Document
const fruit = new Fruit({
    name: "Apple",
    rating: 6,
    review: "They are alright"
});

console.log(fruit.name);
fruit.save()

// People as a Schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favourite_fruit: String
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: "Harry",
    age: 26,
    favourite_fruit: "Apple"
});

console.log(person.name);

// const err = new MongooseError(message);
person.save();
