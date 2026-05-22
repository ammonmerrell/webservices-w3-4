// const util = require('.');



// const { body, validationResult } = require('express');
// const inventoryModel = require("../controllers/games.js");
// const validate = {};
// name

// validate.gamenameRules = () => {
//     return [
//         body('name')
//         .notEmpty()
//         .withMessage('Name is required'),

//         body('releaseDate')
//         .notEmpty()
//         .isLength({ min: 10, max: 10})
//         .withMessage('Release date is required, and must be 10 characters (mm/dd/yyyy)'),

//         body('platform')
//         .notEmpty()
//         .withMessage('Platform is required, (Xbox, Playstation, Nintendo Switch)'),

//         body('genre')
//         .notEmpty()
//         .withMessage('genre is required, (action-adventure, first-person shooter)'),

//         body('description')
//         .notEmpty()
//         .withMessage('Description is required, can be a summary of game, or offical description'),

//         body('players')
//         .notEmpty()
//         .withMessage('Number of players is required, (single-player, multi-player)'),

//         body('type')
//         .notEmpty()
//         .withMessage('Type is required, (console, handheld)')
//     ]
// }



const validator = require('./validatorPlugin.js');

const saveGame = (req, res, next ) => {
    const validationRule = {
        name: 'required|string',
        releaseDate: 'required|string',
        platform: 'required|string',
        genre: 'required|string',
        description: 'required|string',
        players: 'required|string',
        type: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};


module.exports = {
    saveGame
}