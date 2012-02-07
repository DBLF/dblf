describe("routers", function() {
  beforeEach(function() {
    app.routers.reset();
    expect(app.routers.router).not.toBeDefined();
  });

  afterEach(function() { app.routers.reset() });

  describe("initialize", function() {
    it("should initialize a router", function() {
      app.routers.init();
      expect(app.routers.router).toBeDefined();
    });
  });
});
