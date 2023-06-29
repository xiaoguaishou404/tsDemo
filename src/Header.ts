export default class Header {
    constructor() {
        const elem = document.createElement('div');
        elem.innerHTML = `<h1>Header</h1>`;
        document.body.appendChild(elem);
    }
}