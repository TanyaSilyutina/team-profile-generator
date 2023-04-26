# Team Profile Generator

## Description
The team profile generator allows users to quickly and easily create an engineering team's webpage by using a command-line application.
The webpage displays summaries for each team member. Currently implemented profiles include 'manager', 'engineer', and 'intern'.

Please see a generated webpage example below:
![Webpage Example Screenshot](./dist/Webpage%20example.png)

## Installation
1. [Fork](https://github.com/TanyaSilyutina/team-profile-generator/fork) this repository.
2. In your terminal, clone your fork using `git clone <link to your fork>`.
3. In the project directory, run `npm i` to add 'node_modules' folder.

## Usage
The application is invoked by using `node index.js` in the terminal. 
The terminal will present a number of prompts. After user provides answers to the prompts, an HTML file will be generated in their code editor.
The newly generated file displays user's responses in a nicely formatted team roster view.

Check out the [video demo](https://drive.google.com/file/d/1JQKq6ZbD2JvxkaxBmRFgWKrqc-zgTF70/view) for this application.
## Credits
I have referenced the below solutions in my code: 

* [Test user input in Inquirer and email validation](https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8), test implemented on each 'input' type user prompt; email check implemented on line 80.

* [Check for empty string and whitespace](https://stackoverflow.com/questions/2031085/how-can-i-check-if-string-contains-characters-whitespace-not-just-whitespace), implemented on all 'input' type user prompts apart from email

## License
N/A
