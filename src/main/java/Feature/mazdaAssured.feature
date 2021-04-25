Feature: Mazda Assured Calculator feature
Scenario Outline: Assured Calculator TestScenario for Model BT50

Given user is on Calculator Page
When logo on the page is Mazda Assured
Then user select deposit and loanterm 
Then user select "<annualKm>"
Then user chooses payFrequency
Then future value should be displayed

Examples:
| annualKm |
| 20000 | 
| 15000	|
| 1000 |