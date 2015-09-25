Template.feedItem.events({
    'click #pocket': function () {
        console.log(this);
        console.log(this._id);
        Feeds.update({_id: this._id}, {$set:{title: this.title, url: this.url, read_later: true}});
        console.log(this);
    }
});