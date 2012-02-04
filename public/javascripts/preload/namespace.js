(function($) {
  $.namespace = function(name) {
    var namespaces = name.split('.') || [sName];
    var nlen = namespaces.length;

    var root = window;

    for (var i = 0; i < nlen; i++) {
      var ns = namespaces[i];


      if (typeof(root[ns]) === 'undefined') {
        root = root[ns] = {
          extend: $.extend
        };
      }
      else
        root = root[ns];
    }
  }
})(jQuery)
