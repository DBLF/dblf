$.namespace("app.routers");

(function($, $b, self) {

  self.DBLFRouter = $b.Router.extend({
    routes: {
      '': 'index',
      'characters/:slug': 'show'
    },

    initialize: function() {
      this.characters = new app.collections.Characters;
      this.listView = new app.views.CharactersView({collection: this.characters});
      this.characters.on('change:currentCharacter', this.changeCharacter, this);
    },

    changeCharacter: function() {
      var currentChar = this.characters.currentCharacter;
      Backbone.history.navigate(currentChar.url.substring(5, 255), {trigger: true});
    },

    index: function() {
      this.characters.fetch();
    },

    show: function(slug) {
      // initialize CharacterView
    }

  });

  self.extend({
    init: function() {
      self.router = new self.DBLFRouter();
      return self.router;
    },
    reset: function() {
      delete self.router;
    }
  });

})(jQuery, window.Backbone, app.routers);
