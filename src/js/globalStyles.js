import globalStyles from '../global.css?raw'

class Styles {
    constructor() {
        this.styleElement = document.createElement('style');
        this.styleElement.textContent = globalStyles;
        document.head.appendChild(this.styleElement);
    }

    destroy() {
        this.styleElement.remove();
    }
}

export default Styles;