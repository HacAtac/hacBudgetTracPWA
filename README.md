<h1>hacBudgetTracPWA application<h1>

<h2>Description</h2>
  <p>Dealing with node, npm packages, mongoDB, mongoose, express, indexedDB, service-workers, and web-manifets.</br> 
I've made a  PWA budget tracking app that works even if offline. </br>
 Utilizes indexedDB so that if you lose connection it saves entries similiar to localstorage</br> 
 When you reastablish connection it will be updated to db </br> 
 I've then utilized service-workers so that you can use the core functionality of application when completely offline. 'As long as you've visted the app with connection once.' </br>
 It will save your entry and notify you that it's stored locally.  </br>
 Then once you reastablish a connection it will notify you and 'push' the entry to the server </br>
 I've then utilized web-manisfest to allow users to download this application to local machine/phone </br>
 All in all PWA's are pretty neat! I dont know how often I will use them, but if I need to I feel confident in it </br>
 Once all functionality was completed I've used MongoDB atlas and Heroku to deploy my mongoDB/mongoose app live! </br>
 </p>

## Usage

1: Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the MongoDB Website)</br>
2: Clone the repo </br>
3: Install dependencies with npm -i </br>
4: Run npm start to run the server and make the API live </br>
5: Use your browser the downloadable application to make entries to track budget! (even when offline) </br>

## Language

JavaScript </br>
Node.js </br>
express.js </br>
mongoDB </br>
mongoose </br>

## Contributing

If you'd like to contribute to this Budget Trac App you can fork or clone this repo and have at it! </br>

## User Story

AS AN avid traveler </br>
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection </br>
SO THAT my account balance is accurate when I am traveling </br>

GIVEN a budget tracker without an internet connection </br>
WHEN the user inputs an expense or deposit </br>
THEN they will receive a notification that they have added an expense or deposit </br>
WHEN the user reestablishes an internet connection </br>
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated </br>

## Author

Greetings! <('.') , >('.')> </br>
My name is Jordan Hackworth and I hope that this application can help you in many ways! </br>
If you have any questions, comments, or concerns please feel free to contact me. </br>

Jordan Hackworth aka HacAtac </br>
GitHub repo: https://github.com/HacAtac/hacBudgetTracPWA </br>
LinkedIn: https://www.linkedin.com/in/jordan-hackworth-898205217/ </br>
E-mail: jhack00@icloud.com </br>

<a href ="https://github.com/HacAtac/hacBudgetTracPWA" target="_blank">Link to my git hub application.</a></br>
<a href ="https://hacbudget.herokuapp.com/" target="_blank">Link to deployed application.</a>

<h3>Screenshot of app!</h3>

![image](https://user-images.githubusercontent.com/87215152/145688744-0a5c6359-f3b5-4044-a207-63859445e1b8.png)
