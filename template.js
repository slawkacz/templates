var getTemplate = function (id, obj) {
  var templateStr = document.querySelector("#" + id).innerHTML;
  if (typeof(obj) === "undefined")
    obj = window;
  templateStr = templateStr.replace(/{{([^{}]*)}}/g,
    function (matched, parsed) {
      var props = parsed.split('.');
      for (var i = 0, val = obj; i < props.length && val !== null && typeof val !== "undefined"; ++i) {
        val = val[props[i]] || window[props[i]];
        if (typeof val === "undefined" || val === null) {
          val = "";
        }
      }
      return typeof val === 'string' || typeof val === 'number' ? val : matched;
    }
  );
  var div = document.createElement('div');
  div.innerHTML = templateStr;
  var template = div.children[0];
  return template.cloneNode(true);
};