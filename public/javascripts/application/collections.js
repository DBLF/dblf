$.namespace("app.collections");

(function($, $b, self) {

  Characters = $b.Collection.extend({
  });

  self.extend({
    init: function(){
      self.Characters = new Characters;
    }
  });
})(jQuery, window.Backbone, app.collections)
