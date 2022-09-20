# Module 10: OOP Team Profile Generator

## Description 
The challenge was to build a Node.js command-line application that takes in information about employees using on a software engineering team using Inquirer and generates an HTML webpage that displays summaries for each person. As this was practice in Object Oriented Programming, the task was to utilize constructors and classes to create employee objects. Employee was the parent object, and the Manager, Engineer, and Intern classes were extensions of the Employee object. It was also practice in keeping code maintainable by writing unit tests for each part of the code using Jest and ensuring that it passes all of them. A demonstration of the testing and the dynamic creation of the HTML file can be found below. 


## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Screenshot](#screenshot)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)
- [License](#license)

## User Story  

**AS A** manager <br> 
**I WANT** to generate a webpage that displays my team's basic info <br> 
**SO THAT** I have quick access to their emails and GitHub profiles <br> 

## Acceptance Criteria

**GIVEN** a command-line application that accepts user input <br> 
**WHEN** I am prompted for my team members and their information <br> 
**THEN** an HTML file is generated that displays a nicely formatted team roster based on user input <br> 
**WHEN** I click on an email address in the HTML <br> 
**THEN**  my default email program opens and populates the TO field of the email with the address <br> 
**WHEN** I click on the GitHub username <br> 
**THEN**  that GitHub profile opens in a new tab <br> 
**WHEN** I start the application <br> 
**THEN**  I am prompted to enter the team manager’s name, employee ID, email address, and office number <br> 
**WHEN** I enter the team manager’s name, employee ID, email address, and office number <br> 
**THEN**  I am presented with a menu with the option to add an engineer or an intern or to finish building my team <br> 
**WHEN** I select the engineer option <br> 
**THEN**  I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu <br> 
**WHEN** I select the intern option <br> 
**THEN**  I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu <br> 
**WHEN** I decide to finish building my team <br> 
**THEN**  I exit the application, and the HTML is generated <br> 

## Screenshot 
<img width="1378" alt="Screen Shot 2022-09-20 at 2 42 35 PM" src="https://user-images.githubusercontent.com/107950028/191370173-aa4cb341-e2d4-4527-a6ef-9da39499150d.png">
<img width="1382" alt="Screen Shot 2022-09-20 at 2 43 11 PM" src="https://user-images.githubusercontent.com/107950028/191370189-b0b065e9-53bb-445f-b793-5d82b5d02b83.png">

## Walkthrough Video 
https://drive.google.com/file/d/18KEAX_s-Pc6cFfWk85nSf0GffIWpGFsE/view 

## Credits 
Made with &hearts; by Zue. 

### License
This project was created by Zuleika Tesei as part of the curriculum for the UC Davis Coding Boot Camp and Trilogy Education Services.

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
