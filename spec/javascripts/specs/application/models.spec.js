describe("models", function() {
  describe("namespace", function() {
    it("should have a Character", function() {
      expect(app.models.Character).toBeDefined();
    });
  });

  describe("character", function() {
    describe("validations", function() {
      var validationSpy, character;

      beforeEach(function() {
        validationSpy = jasmine.createSpy();
        character = new app.models.Character();
        character.bind('error', validationSpy);
      });

      it("requires name", function() {
        character.set("name", "");
        expect(validationSpy).toHaveBeenCalledWith(character, ["name cannot be empty"], {});
      });
    });
  });
});
