feature('index page', function() {

  var characters = '[{"name":"dude","id":1}]';
  defineFixture("<ul id='characters'></ul>");

  // fakeAjaxFor("/api/characters").on("").with(characters);
  fakeAjax();
  setupRouter();

  beforeEach(function() {
    respondTo("/api/characters").with(characters);
    spec.currentRouter.navigate("", true);
    spec.fakeAjax.respond();
  });

  context("page load", function() {
    scenario("Character list should be loaded on page load", function() {
      expect($('ul#characters li').length).toEqual(1);
      expect($('ul#characters li').eq(0)).toContainSelector('a');
      expect($('ul#characters li a')).toHaveText('dude')
    });

    context("character list", function() {
      scenario("character should include link to show action", function() {
        expect($('ul#characters li a[href="/characters/1"]')).toExist();
      });
    });
  });
});
