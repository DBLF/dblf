$.namespace("app.models");

(function($, self, $b) {
  self.extend({
    Character : $b.Model.extend({
      urlRoot: "/api/characters",
      initialize: function() {
        this.skills = new app.collections.Skills();
        this.on('change', this.initializeNestedAttributes, this);
      },
      validate: function(attrs) {
        var errors = [];
        if (!attrs.name) errors.push("name cannot be empty");
        if (errors.length > 0) return errors;
      },
      initializeNestedAttributes: function() {
        this.skills.reset(this.get('skills'));
        this.off('change', this.initializeNestedAttributes);
      }
    }),
    Skill : $b.Model.extend()
  });

})(jQuery, window.app.models, window.Backbone)
