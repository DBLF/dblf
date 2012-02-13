feature('index page', function() {

  var characters = '[{"name":"dude","id":1}]';
  defineFixture("<ul id='characters'></ul>");
  fakeAjax();
  setupRouter();

  beforeEach(function() {
    spec.fakeAjax.respondWith("GET", "/api/characters", [200, {}, characters]);
    spec.currentRouter.navigate("", true);
    spec.fakeAjax.respond();
  });

  context("page load", function() {
    scenario("Character list should be loaded on page load", function() {
      expect($('ul#characters li').length).toEqual(1);
      expect($('ul#characters li').eq(0)).toContainSelector('span');
      expect($('ul#characters li span')).toHaveText('dude')
    });
  });

  scenario('Character should be shown on click', function() {

  });
});