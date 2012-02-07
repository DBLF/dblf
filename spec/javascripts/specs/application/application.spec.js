describe("dblf application", function() {
  describe("initialize", function() {
    beforeEach(function() {
      spyOn(Backbone.history, 'start');
      spyOn(app.collections, 'init');
      spyOn(app.routers, 'init');
    });

    it("should initialize collections", function() {
      app.initialize();
      expect(app.collections.init).toHaveBeenCalled();
    });

    it("should initialize a router", function() {
      app.initialize();
      expect(app.routers.init).toHaveBeenCalled();
    });

    it("should start Backbone history", function() {
      app.initialize();
      expect(Backbone.history.start).toHaveBeenCalledWith({pushState: true});
    });
  });
});
