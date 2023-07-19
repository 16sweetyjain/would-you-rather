 ## Would You Rather..?


 

This is a React-Redux application targeting a popular game (Would you rather).The user can answer the questions asked by fellow users and see results of their polls.The logged in user can create questions for the game. Leaderboard is implemented to see scores of all users.

## TL;DR
To get started developing right away:

install all project dependencies with npm install\
start the development server with npm start


## What You're Getting
<pre>
|_README.md(this file)
|_package.json # npm package manager file.
|_public
  |_favicon.ico # React Icon, You may change if you wish.
  |_index.html # DO NOT MODIFY.
|_src
  |_actions #provides all redux actions required in the application.
    |_authedUser.js # redux actions for authedUser(currently logged in).
    |_questions.js # redux actions for questions.
    |_shared.js # redux thunks for dispatching required information from backend.
    |_users.js #redux actions for users.
  |_components
    |_Avatar.js #render image for each user.
    |_CreateQuestion.js #class component for creating a new question.
    |_Error.js # class component for showing invalid search results and handling error.
    |_HomeComponent.js # Home page of the app.
    |_HomeForHome.js # Home page for displaying answered and unanswered questions.
    |_Leaderboard.js # Leaderboard page for app displaying scores of each user.
    |_Navbar.js # Navbar for specifying various routes.
    |_QuestionComponent.js #Renders a particular question.
    |_QuestionDetails.js # renders all question related details including poll results.
    |_RoutesComponent.js #specify all routes used within the app.
    |_SignInComponent.js # renders login screen for user.
  |_middleware
    |_index.js #specifies thunk middleware.
    |_logger.js # specifies logger file for thunk.
  |_reducers
    |_authedUser.js # redux reducer for authedUser related actions.
    |_index.js # root reducer including all the reducers.
    |_questionReducer.js # redux reducer for questions related actions.
    |_userReducer.js #redux reducer for users related actions.
  |_App.js # This is the root of app.
  |_App.css #This contains styles for app. 
  |_ App.test.js # Used for testing. Provided with Create React App.
  |_DATA.js # A JavaScript API  provided by  Udacity  for backend. Instructions for the methods are below.
  |_index.css # Global styles.
  |_index.js #for DOM rendering.
</pre>

  ## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|


