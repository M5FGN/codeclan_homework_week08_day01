// Create the zoo database
use zoo;
//drop the zoo database 
db.dropDatabase();

// insert many instead of insertOne
db.animals.insertMany([
    {name: 'Janet',
    type: 'Polar Bear'},
    { name: 'Norman', 
    type: 'Penguin',
age: 5}
]);