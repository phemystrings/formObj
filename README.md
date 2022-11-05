# formObj
Crud operation with client side validation

# Multi-step form navigation and validation
some part of the pages were treated sematically

#pre-requisites
 1. Vanilla Javascripts and Javascripts Higher order functions
 2. Semantic HTML
 3. Vanilla CSS (Table Styling and page responsiveness)
 4. Window Location methods
 5. Regex (Meanwhile; I will post a regex generator app soon)
 
#About the project
  This project was not focused on anything fancy on design basis, it emphasized more on operational use of Javascript:
  1. To create a multi-step user registration form with validation
  2. To create a login form 
  3. To create two validation entries for the registration form and the login form
  4. Regex pattern along with required properties of the inputs to initiate validation on the multi-step
  5. Use a FormObj() pattern to access the inputs in the registration form
    #note that with the FormObj() method, the regular validation may not work without Javascripts because the form will submit if on empty inputs
    ........You can disable the user registration submit logic and see for yourself.
    #we have prevented that bug with using the checkValidity() function manually because it will always render true
  6. Use LocalStorage as our database so everyone can test this code on their machine
  7. Create a small library to use icons as class objects with the i semantic tags
 
 #This is a simple complete Crud operation application that you can optimize by adding some images and colors to the styling, API with axios or Fetch or even create a backend.....
 #I will do a Crud operation with backend maybe sometime later.
 
 I will advise you use Typescripts to generate your Javascripts if you are not from the C# or Dart programming language background.
 
 I did not use Typescripts because I came from that background.
 
 Happy Coding!
