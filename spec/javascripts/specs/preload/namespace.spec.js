context("namespacing", function(){

  it("can create simple namespace foo.bar", function() {
    $.namespace("foo.bar");
    expect(typeof(foo.bar)).not.toEqual("undefined");
  });

  it("can create deep namespace function", function() {
    $.namespace("mc.foo.bar.baz");
    expect(typeof(mc.foo.bar.baz)).not.toEqual("undefined");
    mc.foo.bar.baz.echo = function(s) { return s; };
    expect(mc.foo.bar.baz.echo("fizz")).toEqual("fizz");
  });

  it("should allow for extending created namespace", function() {
    var extension = function() { return "some response" };

    $.namespace('mc.foo');
    expect(typeof(mc.foo.extension)).toEqual("undefined");
    mc.foo.extend({"extension": extension});
    expect(typeof(mc.foo.extension)).toEqual("function");
    expect(mc.foo.extension).toEqual(extension);
  });
});
