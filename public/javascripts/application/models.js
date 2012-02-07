$.namespace("app.models");

(function($, self, $b) {
  var Character = $b.Model.extend({
    initialize: function() {
      this.url = this.setUrl();
    },
    setUrl: function() {
      return "/api/characters/" + this.get('id');
    }
  });

  self.extend({
    Character: Character
  });
})(jQuery, window.app.models, window.Backbone)
