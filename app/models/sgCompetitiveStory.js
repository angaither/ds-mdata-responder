/**
 * Mongoose model for Competitive Story SMS games.
 */
var sgGameSchema = require('./sgGameSchema')()
    ;

var sgCompetitiveStory = function(app) {
  var modelName = 'sg_competitivestory_game';

  var schema = sgGameSchema;
  schema.add({
    // Current status of players
    players_current_status: [{
      // Player's phone number
      phone: String,

      // Last Mobile Commons opt in path delivered to the player
      opt_in_path: Number
    }],

    // Tracks the results of the story as it gets played out
    story_results: [{
      // Mobile Commons opt in path that the user played.
      oip: Number,

      // Phone number of the player this result is for.
      phone: String,

      // The answer given by the user.
      answer: String

      // @TODO add fields for aggregate choice logic and pinch points
    }]
  });

  return app.getModel(modelName, schema);
};

module.exports = sgCompetitiveStory;
