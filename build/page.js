"use strict";
define("Header", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerHTML = "<h1>Header</h1>";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.default = Header;
});
var Components;
(function (Components) {
    // 嵌套命名空间
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerHTML = "<h1>Content</h1>";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerHTML = "<h1>Footer</h1>";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
// import Header from "./Header.js";
define("page", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 我们这里只能使用amd，因为要使用outFile": "./build/page.js，使用了outFile，不支持umd
    // 命名空间和export namespace Home可以一起使用
    // 使用了namespace不能直接使用export default namespace Home {}这样，vscode会说默认导出只能在 ECMAScript-style 模块中使用
    // 这样语法是不对的，你应该像下面分两行使用，好像有的ts版本可以一行直接使用 他的就可以 https://juejin.cn/s/export%20default%20namespace%20typescript
    // namespace Home {}
    // export default Home;
    // 外部使用
    // require(["page"], function (pageModule) {
    // console.log(pageModule.default.Page());
    // })
    // 一个文件一旦使用了import，它就变成了一个amd模块化包，需要使用require()才能读取内部作用域
    // 所以命名空间就不再是全局的变量了，变成了adm define的page的内部顶级变量
    // 也就是说一个ts文件不使用import，他就是一个全局的作用域
    // 使用了import，就得使用export namespace Home，而且要使用require(["page"])
    // namespace Home 一定要export，因为不导出Home就是一个内部变量，export Page只能让Page挂到Home下，但是外部还是谁都访问不到
    // export namespace Home{}
    var Home;
    (function (Home) {
        var Page = /** @class */ (function () {
            function Page() {
                // const header = new Header();
                var content = new Components.Content();
                var footer = new Components.Footer();
                console.log(Home);
            }
            return Page;
        }());
        Home.Page = Page;
    })(Home || (Home = {}));
    exports.default = Home;
});
