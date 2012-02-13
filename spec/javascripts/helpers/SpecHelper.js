/********************************************************/

beforeEach(function() {
  spec.content().empty();
  $.fx.off = true;
  initializeBackboneHistory();
});

afterEach(function() {
  app.routers.reset();
});

/********************************************************/

var context = describe;
var feature = describe;
var scenario = it;

/********************************************************/

var spec = {
  content: function() {
    return $('#jasmine-fixtures');
  }
};

/********************************************************/

function initializeBackboneHistory() {
  // Backbone.history gets lazy loaded when routes are created
  window.Backbone.history ||
  (window.Backbone.history = new Backbone.History);
}

function fakeAjax() {
  beforeEach(function() {
    spec.fakeAjax = sinon.fakeServer.create();
  });

  afterEach(function() {
    spec.fakeAjax.restore();
  });
}

function spyOnAjax() {
  beforeEach(function() {
    spec.ajaxSpy = sinon.spy(jQuery, 'ajax');
  });

  afterEach(function() {
    jQuery.ajax.restore();
    delete spec.ajaxSpy;
  });
}

function setupRouter() {
  beforeEach(function() {
    spec.currentRouter = app.routers.init();
    try {
      Backbone.history.start({silent: true, pushState: true});
    } catch (e) {
    }
    spec.currentRouter.navigate("unmatched route");
  });

  afterEach(function() {
    delete spec.currentRouter;
  });
}
