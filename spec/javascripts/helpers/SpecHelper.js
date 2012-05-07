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
    delete spec.fakeAjax;
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

function stubAjax() {
  beforeEach(function() {
    spec.ajaxSpy = sinon.stub(jQuery, 'ajax').returns(true);
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
      Backbone.history.start({silent: true, pushState: false});
    } catch (e) {
    }
    spec.currentRouter.navigate("unmatched route");
  });

  afterEach(function() {
    spec.currentRouter.navigate("");
  });
}

function defineFixture(html) {
  html == undefined && (html = "<ul id='characters'/>");
  beforeEach(function() {
    setFixtures(html);
  });
}

function respondTo(api, method) {
  api = api;
  method = method || "GET";

  this.with = function(json, status, headers) {
    status = status || 200;
    headers = headers || {};
    spec.fakeAjax.respondWith(method, api, [status, headers, json]);
  };

  return this;
};

function fakeAjaxFor(api, method) {
  api = api;
  method = method || "GET";

  this.on = function(route) {
    this.route = route;
    _on_called = true;
    return this.go();
  }

  this.with = function(json, status, headers) {
    this.json = json;
    this.status = status;
    this.headers = headers;
    _with_called = true;
    return this.go();
  }

  this.go = function() {
    if (this._on_called && this._with_called) {
      fakeAjax();
      setupRouter();

      beforeEach(function() {
        respondTo(api, method).with(json, status, headers);
        spec.currentRouter.navigate(route, true);
        spec.fakeAjax.respond();
      });
    }
    return this;
  }

  return go();
}

