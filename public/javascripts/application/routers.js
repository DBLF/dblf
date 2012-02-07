$.namespace("app.routers");

(function($, $b, self) {

  self.DBLFRouter = $b.Router.extend({
    routes: {
      '': 'index',
      'characters/:slug': 'show'
    },

    initialize: function() {
      if (app.collections.Characters) {
        this.listView = new app.views.CharactersView({collection: app.collections.Characters});
        app.collections.Characters.bind('change:currentCharacter', this.changeCharacter, this);
      }
    },

    changeCharacter: function() {
      var currentChar = app.collections.Characters.currentCharacter;
      Backbone.history.navigate(currentChar.url.substring(5, 255), {trigger: true});
    },

    index: function() {
      app.collections.Characters.fetch();
    },

    show: function(slug) {
      console.log("showing character");
      // initialize CharacterView
    }

  });

  self.extend({
    init: function() {
      self.router = new self.DBLFRouter();
    },
    reset: function() {
      delete self.router;
    }
  });

})(jQuery, window.Backbone, app.routers);
