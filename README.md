# SVG-generic-logo-maker

## Description
This repository contains Javascript code, executed with Node.js, that generates a quality README.md file for developers when building projects in GitHub. This project also utilizes npm packages inquirer and fs. When initialized, the app prompts the user to answer a series of questions relating to their project. Based on user's responses, a markdwon file is created with the following headers and subheaders: Title, Description, Installation, Usage, Contributing, Tests, Licensing, and Questions. Responses are added as content to the corresponding headers within the markdown file. Created markdown files also contain a table of contents as well as a badge and link to the selected licensing associated with the project.

This is the first project I have completed that uses the node.js environment for executing JavaScript code. I found that I was able to grasp this topic more readily than other topics covered so far in the Coding Bootcamp. I have enjoyed the first introduction to backend coding and working outside the browser and I look forward to diving deeper into backend coding.

## Installation
N/A

## Usage
<!-- google drive link to video -->

## Credits
For this project I greatly utilized the documentation from inquirer. Specifically, I heavily referenced the documentation regarding the validate input property and choices input property when creating the prompt for licensing. The validate property I used to limit the user to selected a maximum of a singular license when answering the prompts.

I would also like to acknowledge GitHub user lukas-h and their license-badges.md file. I used this resource when creating the function for rendering a badge and a link for different licenses within the license section of the generated markdown file. This resource can be found here: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

## Links
GitHub: https://github.com/sambrez/SVG-generic-logo-maker