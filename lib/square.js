// Create the Square Class

class Square {
    // Add a constructor to the class instance
    constructor() {
        // Define the color property that will be used
        this.color='';
    }
// Create a method for updating the color of the object
    updateColor(color){
        this.color=color;
    }
    // Generate SVG Code for the Square object
    render() {
        return '<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>';
    }

}
// Export the Square class
module.exports= Square;