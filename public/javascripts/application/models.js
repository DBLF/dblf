$.namespace("app.models");

(function($, self, $b) {
  self.extend({
    Character : $b.Model.extend({
      urlRoot: "/api/characters",
      initialize: function() {
        this.skills = new app.collections.Skills();
        this.merits = new app.collections.Merits();
        this.on('change', this.updateNestedAttributes, this);
      },
      validate: function(attrs) {
        var errors = [];
        if (!attrs.name) errors.push("name cannot be empty");
        if (errors.length > 0) return errors;
      },
      updateNestedAttributes: function() {
        this.skills.reset(this.get('skills'));
        this.merits.reset(this.get('merits'));
      }
    }),
    Skill : $b.Model.extend(),
    Merit : $b.Model.extend()
  });

})(jQuery, window.app.models, window.Backbone)
