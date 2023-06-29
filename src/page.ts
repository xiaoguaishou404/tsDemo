import Header from "./Header.js";

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


// 一个文件一旦使用了import和顶级变量export，它就变成了一个amd模块化包，需要使用require()才能读取内部作用域，注意namespace里的export并不是amd，他不是顶级变量export，他是ts的编译语法糖，并不是amd的export关键字
// 所以命名空间就不再是全局的变量了，变成了adm define的page的内部顶级变量
// 也就是说一个ts文件不使用import，他就是一个全局的作用域
// 使用了import，就得使用export namespace Home，而且要使用require(["page"])
// namespace Home 一定要export，因为不导出Home就是一个内部变量，export Page只能让Page挂到Home下，但是外部还是谁都访问不到

// export namespace Home{}
namespace Home {
    export class Page {
        constructor() {
            const header = new Header();
            const content = new Components.Content();
            const footer = new Components.Footer();
            console.log(Home);
        }
    }
}
export default Home;

