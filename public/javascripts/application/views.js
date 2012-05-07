$.namespace("app.views");

(function($, $b, self) {

  self.CharactersView = $b.View.extend({
    tagName: "ul",
    initialize: function(options) {
      this.setElement($('#characters'));
      this.collection.on("reset", this.render, this);

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
      'click': 'showCharacter'
    },
    initialize: function() {
      this.template = app.templates['character_list'];
    },
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
    showCharacter: function(event) {
      this.collection.setCurrent = this.model.id;
    }
  });

  self.CharacterView = $b.View.extend({
    tagName: "div",
    initialize: function(options) {
      this.setElement($('#character'));
      this.infoView = new self.CharacterInfoView({model: this.model});
      this.model.on("change", this.render, this);
    },
    render: function() {
      this.$el.append(this.infoView.render().el);
      return this;
    }
  });

  self.CharacterInfoView = $b.View.extend({
    initialize: function() {
      this.template = app.templates['character_info'];
    },
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
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
