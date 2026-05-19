const mongodb = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

// const getAll = async (req, res) => {
//     const result = await mongodb.getDatabase('cluster0').db('games').collection('contacts').find();
//     result.toArray().then((games) => {
//         res.setHeader('Content-Type', 'application/json');
//         res.status(200).json(games);
//     });
// };

// old getAll from contacts 


const getAll = async (req,res) => {
    //#swagger.tags=['contacts']
    const result = await mongodb.getDatabase('cluster0').db('data0').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

module.exports = {
    getAll
};