$.namespace("app.views");

(function($, $b, self) {

  self.CharactersView = $b.View.extend({
    tagName: "ul",
    initialize: function(options) {
      this.setElement($('#characters'));
      this.collection.bind("reset", this.render, this);

      this.characterAddView = new self.AddView;
    },
    render : function() {
      this.$el.empty();

      this.collection.each(function(character) {
        var characterView = new self.CharacterListView({model: character, collection: this.collection});
        this.$el.append(characterView.render().el);
      }, this);

      this.$el.append(this.characterAddView.render().el);

      return this;
    }
  });

  self.CharacterListView = $b.View.extend({
    tagName: "li",
    events: {
      'click span': 'showCharacter'
    },
    initialize: function() {
      this.template = app.templates['character_list'];
    },
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
    showCharacter: function(event) {
      this.collection.currentCharacter = this.model;
      this.collection.trigger("change:currentCharacter");
    }
  });

  self.AddView = $b.View.extend({
    className: "new",
    tagName: "div",
    template: function() { _.template('') },
    render: function() {
      $(this.el).html(this.template());
      return this;
    }
  });

})(jQuery, window.Backbone, app.views);
