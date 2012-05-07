$.namespace("app.collections");

(function($, $b, self) {

  var Characters = $b.Collection.extend({
    url: "/api/characters",
    model: app.models.Character,
    comparator: function(character) {
      return character.get('name');
    },
    setCurrent: function(id) {
      this.currentCharacterId = id;
      this.trigger("change:currentCharacterId");
    }
  });

  self.extend({
    Characters: Characters
  });

})(jQuery, window.Backbone, app.collections);
