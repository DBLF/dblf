$.namespace("app.routers");

(function($, $b, self) {

  self.DBLFRouter = $b.Router.extend({
    routes: {
      '': 'index',
      'characters/:id': 'show'
    },

    initialize: function() {
      this.characters = new app.collections.Characters;
      this.listView = new app.views.CharactersView({collection: this.characters});
      this.characters.on('change:currentCharacterId', this.changeCharacter, this);
      this.characters.fetch();
    },

    changeCharacter: function() {
      var char_id = this.characters.currentCharacter;
      Backbone.history.navigate("characters/"+char_id, {trigger: true});
    },

    index: function() {
    },

    show: function(id) {
      this.character = new app.models.Character;
      this.character.id = id;
      this.characterView = new app.views.CharacterView({model: this.character});
      this.character.fetch();
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
