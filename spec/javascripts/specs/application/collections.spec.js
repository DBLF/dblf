describe("collections", function() {
  it("should be defined", function() {
    expect(app.collections.Characters).toBeDefined();
  });

  describe("characters", function() {
    var characters;

    beforeEach(function() {
      characters = new app.collections.Characters;
    });

    it("should have a correctly set URL", function() {
      expect(characters.url).toEqual("/api/characters");
    });

    describe("sorting", function() {
      var character1, character2, character3;

      beforeEach(function() {
        character1 = new app.models.Character({name: "aaa"});
        character2 = new app.models.Character({name: "bbb"});
        character3 = new app.models.Character({name: "ccc"});
      });

      it("should sort characters on name", function() {
        characters.add([character3, character1, character2]);
        expect(characters.at(0)).toEqual(character1);
        expect(characters.at(1)).toEqual(character2);
        expect(characters.at(2)).toEqual(character3);
      });
    });
  });
});
