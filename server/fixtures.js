if (Feeds.find().count() === 0) { Feeds.insert({
  title: 'Introducing Telescope',
  url: 'http://sachagreif.com/introducing-telescope/',
  read_later: false
});
  Feeds.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    read_later: false
  });
  Feeds.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    read_later: false
  }); 
}