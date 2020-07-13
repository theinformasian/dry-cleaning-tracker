# Dry Cleaning Tracker

## Description
React App to log your dry cleaning expenses! Use each icon of clothing to enter the quantity for this bill. Use the Settings panel to set details like the price per item, your preferred facility, the frequency of runs, etc.

### Components

#### Article of Clothing widget
Sub-component: editable text
* Displays glyph + name + quantity-notification-bubble at rest
* upon click, displays Quantity input

#### Price Displays: non-editable
* Default state: '$0'
* update according to input

#### Editable numeric input
* input restrictions:
    * Price: must only allow positive long input up until max long
    * Quantity: must only allow positive whole numbers
* Default/empty states:
    * Price: '$_'
    * Quantity: '$_'
* Behvaiors:
    * Enter key to save
    * Esc key to exit without saving
    * Click outside to save
    * click on text to edit

#### Buttons
* have title/icon
* on click, execute action
* current use cases: close modal, submit/done, settings

#### Summary table
* fixed data table displaying `item name | quantity | item price | total line price`, with final row displaying `total quantity | total price`

## Activity Log
05/04/19: <br>
19:41 - started in codepen<br>
20:40 - imported to github<br>

07/12/20: <br>
18:22 - Hello again :D Reimagining this project as a react app! Makes a lot of sense; entering data for each article of clothing is reusing the same component.

## Bugs
* ~~incr/decr button divs span width of page (clickable area is whole width); make it the width of the input field~~

# React App Content

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify