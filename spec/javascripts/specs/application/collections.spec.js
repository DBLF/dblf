describe("collections", function() {
  describe("init", function() {
    it("should create a new characters collection",  function() {
      expect(app.collections.Characters).not.toBeDefined();
      app.collections.init();
      expect(app.collections.Characters).toBeDefined();
    });
  });
});
