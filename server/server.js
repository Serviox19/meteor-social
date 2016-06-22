Meteor.startup(function () {
  if (Events.find().count() === 0) {

    var events = [
      {'name': 'EDC New York',
        'description': 'Wild ass Rave party in Times Square!'},
      {'name': 'Cochella',
        'description': 'Music festival with many different artists, across different venues.'},
      {'name': 'Summer Sixteen MSG',
        'description': 'Drake concert at MSG for his Summer Sixteen Tour'}
    ];

    for (var i = 0; i < events.length; i++) {
      Events.insert({name: events[i].name, description: events[i].description});
    }
  }
});
