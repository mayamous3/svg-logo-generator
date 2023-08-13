// Create the Triangle Class

class Triangle {

    // Add a constructor to the class instance
    constructor() {
        // Define the color property that will be used
        this.color='';
    }

// Create a method for updating the color of the object
updateColor(color) {
    this.color = color;
}

// Generate SVG Code for the triangle object
render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
}

}

// Export the triangle class
module.exports = Triangle; 