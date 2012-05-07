describe("routers", function() {
  var router,
    navigation_options = {trigger: true, replace: false};

  stubAjax();

  beforeEach(function() {
    expect(app.routers.router).not.toBeDefined();
  });

  describe("initialize", function() {
    it("should return the initialized router", function() {
      router = app.routers.init();
      expect(router).toBeDefined();
      expect(router).toBe(app.routers.router);
    });
  });

  describe('DBLF router', function() {
    setupRouter();

    describe('/', function() {
      beforeEach(function() {
        spec.currentRouter.on("route:index", spec.ajaxSpy);
        spec.currentRouter.navigate("", navigation_options);
      });

      it("routes to the index method", function() {
        expect(spec.ajaxSpy.called).toBeTruthy();
      });

      it("fetches character list", function() {
        expect(spec.ajaxSpy.getCall(0).args[0].url).toEqual('/api/characters');
      });
    });

    describe('/characters/:id', function() {
      beforeEach(function() {
        spec.currentRouter.on("route:show", spec.ajaxSpy);
        spec.currentRouter.navigate("/characters/200", navigation_options);
      });

      it("routes to the show action", function() {
        expect(spec.ajaxSpy.called).toBeTruthy();
      });

      it("fetches character data", function() {
        expect(spec.ajaxSpy.getCall(1).args[0].url).toEqual('/api/characters/200');
      });
    });
  });
});
