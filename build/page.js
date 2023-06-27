"use strict";
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            var header = new Components.Header();
            var content = new Components.Content();
            var footer = new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
