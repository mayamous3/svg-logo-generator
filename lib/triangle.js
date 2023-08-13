class Triangle {
    constructor() {
        this.color='';
    }


updateColor(color) {
    this.color = color;
}

render() {
    return `<polygon points="" fill="${this.color}" />`;
}

}
module.exports = 'Triangle'; 