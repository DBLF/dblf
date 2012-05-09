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
    initialize: function(options) {
      this.setElement($('#character'));
      this.subViews = [
        new self.CharacterMetadataView({model: this.model}),
        new self.CharacterSkillsView({collection: this.model.skills}),
        new self.CharacterMeritsView({collection: this.model.merits})
      ];
      this.appendSubviews();
      this.model.on("change", this.render, this);
    },
    appendSubviews: function() {
      _.each(this.subViews, function(subView) {
        this.$el.append(subView.render().el);
      }, this);
    },
    render: function() {
      _.each(this.subViews, function(subView) {
        subView.render();
      }, this);
      return this;
    }
  });

  self.CharacterMetadataView = $b.View.extend({
    initialize: function() {
      this.template = app.templates['character_metadata'];
    },
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });

  self.ListView = $b.View.extend({
    tagName: "ul",
    itemTemplate: 'list_view',
    render: function() {
      this.collection.each(function(model) {
        var view = new self.ListItemView({model: model, collection: this.collection, templateName: this.itemTemplate});
        this.$el.append(view.render().el);
      }, this);
      return this;
    }
  });

  self.ListItemView = $b.View.extend({
    tagName: "li",
    templateName: 'list_view',
    initialize: function() {
      if (this.options.templateName) this.templateName = this.options.templateName;
      this.template = app.templates[this.templateName];
    },
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });

  self.CharacterSkillsView = self.ListView.extend({
    id: "skills",
    itemTemplate: 'character_skill'
  });

  self.CharacterMeritsView = self.ListView.extend({
    id: 'merits',
    itemTemplate: 'character_skill'
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
