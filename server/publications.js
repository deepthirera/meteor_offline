Meteor.publish('feeds', function() { return Feeds.find();});
//Meteor.publish('feeds', function() { return Feeds.find({read_later: false});});