use("curdDB");
// db.users.insertMany([
//     { name: 'fiaz', age:30 } ,
//     { name: 'ali', age:30 },
//     { name: 'hassan', age:30 },
//     { name: 'hussain', age:30 },
//     { name: 'ahmed', age:30 }
// ]);

// let a = db.users.findOne({ name: 'fiaz' });
// console.log(a);

// let a=db.users.updateOne({ name: 'fiaz' }, { $set: { name: 'fiaz hussain' } });
// console.log(a);

let a=db.users.updateMany({age:30}, { $set: { age:20 } });
console.log(a);

// let a=db.users.deleteOne({ name: 'fiaz hussain' });
// console.log(a);
