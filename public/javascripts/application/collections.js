$.namespace("app.collections");

(function($, $b, self) {

  self.extend({

    Characters : $b.Collection.extend({
      url: "/api/characters",
      model: app.models.Character,
      comparator: function(character) {
        return character.get('name');
      },
      setCurrent: function(id) {
        this.currentCharacterId = id;
        this.trigger("change:currentCharacterId");
      }
    }),

    Skills : $b.Collection.extend({
      model: app.models.Skill
    }),

    Merits : $b.Collection.extend({
      model: app.models.Merit
    })
  });

})(jQuery, window.Backbone, app.collections);
