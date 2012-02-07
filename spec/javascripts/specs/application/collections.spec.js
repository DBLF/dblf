describe("collections", function() {
  beforeEach(function() {
    app.collections.reset();
    expect(app.collections.Characters).not.toBeDefined();
  });

  describe("init", function() {
    it("should create a new characters collection",  function() {
      app.collections.init();
      expect(app.collections.Characters).toBeDefined();
    });
  });
});
