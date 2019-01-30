#Would You Rather
---
##Description
Would You Rather is a web app that lets a user play the popular “Would You Rather?” game. A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.  

Users are able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

##How to get started:
```
* install all project dependencies with `npm install`
* start the server with `npm start`
```

## What You're Getting
```bash
├── README.md - This file.
├── package.json
├── public
│    ├── favicon.ico
│    ├── mainifest.json
│    └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── BooksAPI.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── images
    │   ├── 1.png
    │   ├── 2.png
    │   └── 3.png
    ├── index.css
    ├── index.js
    ├── actions
    │   ├──authedUser.js
    │   ├──questions.js
    │   ├──shared.js
    │   ├──users.js
    │   └──types.js
    ├── components
    │   ├──AnswerQuestion.js
    │   ├──App.js
    │   ├──BackButton.js
    │   ├──Dashboard.js
    │   ├──Leaderboard.js
    │   ├──Login.js
    │   ├──NavBar.js
    │   ├──NewQestion.js
    │   ├──PageNotFound.js
    │   ├──PercentageBar.js
    │   ├──Question.js
    │   ├──QuestionPage.js
    │   ├──QuestionResults.js
    │   └──User.js
    ├── middleware
    │   ├──index.js
    │   └──logger.js
    ├── actions
    │   ├──reducers
    │   ├──authedUser.js
    │   ├──index.js
    │   ├──question.js
    │   └──users.js
    ├── utils
    │   ├──_DATA.js
    │   ├──api.js
    │   ├──helps.js
    │   └──README.md
    └──registerServiceWorker.js
```

##License
Copyright (c) 2018 Craig Sloane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
