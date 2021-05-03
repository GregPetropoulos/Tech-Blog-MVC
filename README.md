# Tech-Blog-MVC

[Deployed Link](https://techblogspeakeasy2021.herokuapp.com/)


[Source Code](https://github.com/GregPetropoulos/Tech-Blog-MVC)

![GitHub License Badge](https://shields.io/badge/license-MIT-green)

## Description
 A tech blog made from scratch using the back end with handlebars templates, api routes and sequelize. I used Models Views Controllers paradigm to setp up the appropriate folder structures.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
### Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Models](#database-models)
- [Associations](#associations)
- [Seeding](#seeding)
- [Credits](#credits)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Test](#test)
- [Code of Conduct](#contributor-covenant-code-of-conduct)
- [License](#license)

## Installation

The appropriate packages consists of

- npm i
- npm init
- npm install mysql2
- npm install doetenv
- npm install bcrypt
- npm install bootstrap
- npm install connection-session-sequelize
- npm install express
- npm install express-handlebars
- npm install express-session
- npm install nodemon
- npm install prettier
- npm install seed
- npm install sequelize
- npm install -D eslint

## Database Models

The database models contain the following three models, including the requirements listed for each model:

- `Comment`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `comment_text`

    - String.

    - Doesn't allow null values.

  - `user_id`
    - Integer

    - Doesn't allow null values.

    - References the id in the User Model.

  - `blog_id`
    - Integer

    - Doesn't allow null values.

    - References the id in the Blog Model.

- `Blog`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `title`

    - String.

    - Doesn't allow null values.
    
  - `content`

    - Text.

    - Does allow null values.

  - `user_id`

    - Integer

    - Doesn't allow null values.

    - References the id in the User Model.

 
- `User`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `username`

    - String.

    - Doesn't allow null values.

  - `email`

    - String.
    
    - Doesn't allow null values.

    - Unique is true

    - Validate at least 8 characters

  - `github`

    - String.

    - Does allow null values.

  - `twitter`

    - String.

    - Does allow null values.

 Hooks were used before create to hash the password and before an updated password

## Associations

In the index.js file of models directory the associations were created with these methods`hasMany`, `belongsToMany` were used to associate the appropriate tables


## Seeding

-- After running the

```
 npm run seeds

```

From the command line the techblog_db in mysql workbench was seeded and verified on mysql workbench.




## All CRUD operations successful with use of **GET, POST,PUT, DELETE.


## Credits

https://sqlbolt.com/lesson/select_queries_introduction

https://guides.github.com/features/mastering-markdown/

https://sequelize.org/master/manual/model-querying-finders.html

## Badges

[![forthebadge](https://forthebadge.com/images/badges/approved-by-george-costanza.svg)](https://github.com/gregpetropoulos)
[![forthebadge](https://forthebadge.com/images/badges/built-with-science.svg)](https://github.com/gregpetropoulos)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://github.com/gregpetropoulos)



## Acceptance Criteria

- [ √] When I visit the CMS-style blog site for the first time, I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

- [ √] I click on the homepage option and taken to the homepage
- [ √] I click on any other links in the navigation, then I am prompted to either sign up or sign in

- [ √] When I choose to sign up I am prompted to create a username and password

- [ ] When I click on the sign-up button my user credentials are saved and I am logged into the site
- [ ] When I revisit the site at a later time and choose to sign in,then I am prompted to enter my username and password

- [ ] When I am signed in to the site, I can see navigation links for the homepage, the dashboard, and the option to log out

- [ ] When I click on the homepage option in the navigation, then I am taken to the homepage and presented with existing blog posts that include the post title and the date created

- [ ] When I click on an existing blog post,then I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- [ ] After I enter a comment and click on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

- [ ] When I click on the dashboard option in the navigation, I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

- [ ] When I click on the button to add a new blog post, then I am prompted to enter both a title and contents for my blog post

- [ ] When I click on the button to create a new blog post,then the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

- [ ] When I click on one of my existing posts in the dashboard,  then I am able to delete or update my post and taken back to an updated dashboard

- [ ] When I click on the logout option in the navigation, I am signed out of the site and when I am idle on the page for more than a set time, then I am automatically signed out of the site 

## Features

Use the CLI to CRUD.

## How to Contribute

Add a comment prior to contribution

## Tests

No testing on this app

## Contributor Covenant Code of Conduct

### Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, caste, color, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
- Focusing on what is best not just for us as individuals, but for the
  overall community

Examples of unacceptable behavior include:

- The use of sexualized language or imagery, and sexual attention or
  advances of any kind
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or email
  address, without their explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md).
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series
of actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior, harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within
the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
[https://www.contributor-covenant.org/version/2/0/code_of_conduct.html][v2.0].

Community Impact Guidelines were inspired by
[Mozilla's code of conduct enforcement ladder][mozilla coc].

For answers to common questions about this code of conduct, see the FAQ at
[https://www.contributor-covenant.org/faq][faq]. Translations are available
at [https://www.contributor-covenant.org/translations][translations].

[homepage]: https://www.contributor-covenant.org
[v2.0]: https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
[mozilla coc]: https://github.com/mozilla/diversity
[faq]: https://www.contributor-covenant.org/faq
[translations]: https://www.contributor-covenant.org/translations

## License

![GitHub License Badge](https://shields.io/badge/license-MIT-green)

Copyright (c) [2021] [Greg Petropoulos]

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

## Questions

### Contact:

Github: [https://github.com/gregpetropoulos](https://github.com/gregpetropoulos)

Email: <gregpetropoulos@yahoo.com>
