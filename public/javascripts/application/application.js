$.namespace("app");

(function(self) {
  self.initialize = function() {
    self.collections.init();
    self.routers.init();
    Backbone.history.start({pushState: true});
  };
})(window.app);
