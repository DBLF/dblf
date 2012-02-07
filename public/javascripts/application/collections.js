$.namespace("app.collections");

(function($, $b, self) {

  Characters = $b.Collection.extend({
    url : "/api/characters",
    model: app.models.Character
  });

  self.extend({
    init: function(){
      self.Characters = new Characters;
    },
    reset: function() {
      delete self.Characters;
    }
  });
})(jQuery, window.Backbone, app.collections)
