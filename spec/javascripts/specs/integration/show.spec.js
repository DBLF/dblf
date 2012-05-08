feature('show page', function() {
  var character = {
    "name":"dude",
    "id":1,
    "skills":[
      {"name":"thing","value":25}
    ]
  };

  defineFixture("<div id='character'></div>");
  // fakeAjaxFor("/api/characters/1").on("/characters/1").with(character);
  fakeAjax();
  setupRouter();

  beforeEach(function() {
    respondTo("/api/characters/1").with(JSON.stringify(character));
    spec.currentRouter.navigate("/characters/1", true);
    spec.fakeAjax.respond();
  });

  context("character metadata", function() {
    scenario("character name", function() {
      expect(spec.content().html()).toMatch(/Name: dude/);
    });

    scenario("character skills", function() {
      expect($('#skills')).toExist();
      expect($('#skills')).toContainSelector('li:contains(thing):contains(25)')
    });
  });

});
