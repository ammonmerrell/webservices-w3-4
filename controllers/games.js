const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;



const getAll = async (req,res) => {
    //#swagger.tags=['contacts']
    const result = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('games').find();
    result.toArray().then((games) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(games);
    });
};

module.exports = {
    getAll
};