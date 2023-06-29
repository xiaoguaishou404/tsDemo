namespace Components {
    // 嵌套命名空间
    export namespace SubComponents {
        export class Test{
            // 外部直接Components.SubComponents.Test访问
        }
    }
    export class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = `<h1>Content</h1>`;
            document.body.appendChild(elem);
        }
    }
    export class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = `<h1>Footer</h1>`;
            document.body.appendChild(elem);
        }
    }
}