class Square {
    constructor() {
        this.color='';
    }

    updateColor(color){
        this.color=color;
    }
    render() {
        return '<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>';
    }

}
module.exports= 'Circle';