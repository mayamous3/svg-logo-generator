# svg-logo-generator
## Description
Created a node.js command-line app to take user in put and produce logos that are saved as SVG files.

The application gives users the ability to provide desired text, color and shape in order to produce the logo output.

## Accomplishments
- Created class files for each possible logo shape (circle, square, triangle)
- Classes also have methods for updating the color of the logos.
- Commented the code.
- Installed Jest and Inquirer packages.
- Updated Index.js to use packages to query the user about what elements are needed for the logo.
- Documented Tests below.
- Recorded functioning command line application.

### Link to Repository
Repo Link: https://github.com/mayamous3/svg-logo-generator

## Test Instructions
1. Open the application in terminal.
2. Execute node index.js
3. Respond to the prompts given!
    Characters: ACP
    Color Choice: Crimson
    Shape: Circle
    Text Color: Orchid
## Video Demonstration

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Sources
https://www.adobe.com/creativecloud/file-types/image/vector/svg-file.html#:~:text=From%20Chrome%20and%20Edge%20to,be%20displayed%20in%20your%20browser.

I used the below site to test my SVG output, as it was not appearing in browser.
https://www.svgviewer.dev
## Author
Amanda Cooper-Ponte (Product Owner)
Check out my work here!
https://mayamous3.github.io/amanda-wow-portfolio/ 