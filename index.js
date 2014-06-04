(function () {
  window.addEventListener('DOMContentLoaded', function () {
    var helloWorldObj = {
      hello: "Hello",
      world: "World",
      explanationMark: "!"
    }
    var tmpl = getTemplate('helloWorld-tmpl', helloWorldObj);
    document.getElementById('wrapper').appendChild(tmpl);
  }, false);
})();