feature('show page', function() {
  var character = '{"name":"dude","id":1}';

  defineFixture("<div id='character'></div>");
  // fakeAjaxFor("/api/characters/1").on("/characters/1").with(character);
  fakeAjax();
  setupRouter();

  beforeEach(function() {
    respondTo("/api/characters/1").with(character);
    spec.currentRouter.navigate("/characters/1", true);
    spec.fakeAjax.respond();
  });

  context("page load", function() {
    scenario("character name", function() {
      expect(spec.content().html()).toMatch(/Name: dude/);
    });
  });

});
