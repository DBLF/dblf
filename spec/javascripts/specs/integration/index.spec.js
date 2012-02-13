feature('index page', function() {

  var characters = "[{\"name\":\"dude\",\"id\":1}]";
  fakeAjax();
  setupRouter();

  beforeEach(function(){
    setFixtures("<ul id='characters'></ul>");
    spec.fakeAjax.respondWith("GET", "/api/characters", [200, {}, characters]);
    spec.currentRouter.navigate("", true);
  });

  context("page load", function() {
    xit("Character list should be loaded on page load", function() {
      spec.fakeAjax.respond();
      expect($('ul#characters li').length).toEqual(1);
    });
  });

  scenario('Character should be shown on click', function() {

  });
});