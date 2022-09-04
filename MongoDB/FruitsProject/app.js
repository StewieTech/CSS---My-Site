// require mongoose package
const mongoose = require('mongoose');
 
main().catch(err => console.log(err));
 
async function main() {
  // Use connect method to connect to the server
  await mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB');
 
  const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'No name specified']
    },

    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
  });
 
  const Fruit = mongoose.model('Fruit', fruitSchema);
 
  const fruit = new Fruit({
    name: 'Peaches',
    rating: 10,
    review: 'Peaches are tasty tasty!!.'
  });

  const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: 'it goes with everything!'
});
 
  await pineapple.save();
 
  const fruits = await Fruit.find();
  console.log(fruits);
 
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });
 
  const Person = mongoose.model('Person', personSchema);
 
  const person = new Person({
    name: 'John',
    age: 37,
    favouriteFruit: fruitSchema
  });
 


    const amy  = new Person({
        name: 'Amy',
        age: 49,
        favouriteFruit: 'Pineapple'
    })



  await amy.save();
 
  const people = await Person.find();
  console.log(people);
 
//   const kiwi = new Fruit({
//     name: 'Kiwi',
//     score: 10,
//     review: 'The best fruit!'
//   });
 
//   const orange = new Fruit({
//     name: 'Orange',
//     score: 4,
//     review: 'Too sour for me'
//   });
 
//   const banana = new Fruit({
//     name: 'Banana',
//     score: 3,
//     review: 'Weird texture'
//   });
 
//   Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Successfully saved all the fruits to FruitsDB');
//     }
//   });
// } 

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: "6314bb8e86e962e2231dd579"}, {name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully updated the Document');
//     }
// });

// Fruit.deleteMany(
//     {_id: "6314bb9559a3458b497e1f5e"}
//     // {_id: "6314ba5a10819780080de202"}, {_id: "63124f30745f4a3dee543a4b"} 
//     ,function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully Deleted all those Documents');
//     }
// });

// Person.deleteMany(
//     {name: "John"} 
//     ,function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully Deleted People Documents');
//     }
// });


};