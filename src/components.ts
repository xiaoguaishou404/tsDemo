namespace Components {
    export class Header {

        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = `<h1>Header</h1>`;
            document.body.appendChild(elem);
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