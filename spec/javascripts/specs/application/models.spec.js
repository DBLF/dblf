describe("models", function() {
  describe("namespace", function() {
    it("should have a Character", function() {
      expect(app.models.Character).toBeDefined();
    });
  });

  describe("character", function() {
    var character;

    describe('properties', function() {
      stubAjax();

      beforeEach(function() {
        character = new app.models.Character();
      });

      it("should have a correctly set URL", function() {
        character.id = 5;
        expect(character.url()).toEqual("/api/characters/5");
      });
    });

    describe("validations", function() {
      var validationSpy;

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
