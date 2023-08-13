// Create the Circle Class

class Circle {
    // Add a constructor to the class instance
    constructor() {
        // Define the color property that will be used
        this.color='';
    }

// Create a method for updating the color of the object
    updateColor(color){
        this.color = color;
    }
    // Generate SVG Code for the triangle object
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }

}
// Export the triangle class
module.exports= Circle;