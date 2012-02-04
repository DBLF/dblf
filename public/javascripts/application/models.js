$.namespace("app.models");

(function($, self, $b) {
  var Character = $b.Model.extend({});

  self.extend({
    Character: Character
  });
})(jQuery, window.app.models, window.Backbone)
