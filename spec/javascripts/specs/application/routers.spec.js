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

  describe('routes', function() {
    setupRouter();

    describe('/', function() {
      beforeEach(function() {
        spec.currentRouter.bind("route:index", spec.ajaxSpy);
        spec.currentRouter.navigate("", navigation_options);
      });

      it("routes to index", function() {
        expect(spec.ajaxSpy.called).toBeTruthy();
      });

      it("fetches character data", function() {
        expect(spec.ajaxSpy.getCall(0).args[0].url).toEqual('/api/characters');
      });
    });

    describe('/characters/:id', function() {
      beforeEach(function() {
        spec.currentRouter.bind("route:show", spec.ajaxSpy);
        spec.currentRouter.navigate("characters/1", navigation_options);
      });

      it("routes to show", function() {
        expect(spec.ajaxSpy.called).toBeTruthy();
      });
    });
  });
});
