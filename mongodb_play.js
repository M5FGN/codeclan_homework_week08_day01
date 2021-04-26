use zoo;

// ID taken from MongoDB compass and used to find the animal that matched the ID
const id = ObjectId('6086ffbed6d0bd85c7964a81');
db.animals.findOne({_id: id});

// Used to update an animal in the db
// Arguments passed in will be the ID of the animalo to be changed and the set with the key to be changed.
db.animals.updateOne(
    { _id: ObjectId('6086ffbed6d0bd85c7964a81') },
    { $set: {name: 'Pip'}}
);


//Used to delete the animal with the matching ID
db.animals.deleteOne({ _id: ObjectId('6086ffbed6d0bd85c7964a80') })