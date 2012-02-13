$.namespace("app.models");

(function($, self, $b) {
  var Character = $b.Model.extend({
    validate: function(attrs) {
      var errors = [];
      if (!attrs.name) {
        errors.push("name cannot be empty");
      }
      if (errors.length > 0) return errors;
    }
  });

  self.extend({
    Character: Character
  });
})(jQuery, window.app.models, window.Backbone)
