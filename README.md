<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


A simple React-based app that allows users to manage their tasks. Users can add new tasks, mark them as complete, and delete them from their to-do list. The app includes notifications to alert users of duplicate tasks or other relevant actions.

#styling:

The project uses custom CSS to style the to-do list items, input fields, buttons, and notifications.
Specific styles are applied to completed tasks and when hovering over the delete button to enhance the user experience.


Notifications:

The react-notifications library is used to provide feedback to the user. For example, it shows a warning if a duplicate task name is entered.



Here is working:


1. **Adding a New To-Do Item**:
   - When a user enters a task name in the input field and clicks "Save," the `saveToDoList` function is triggered.
   - This function checks if the task name already exists in the `todoList` array. If it doesn't, the task is added to the list; otherwise, a warning is displayed using `NotificationManager`.

2. **Rendering To-Do Items**:
   - The `todoList` array is mapped to individual `ToDoListItems` components, which render each task as a list item (`li`) on the screen.
   - Each list item includes the task name, its position in the list, and a delete button (a cross sign).

3. **Marking Tasks as Complete (Adding the Line)**:
   - Each task can be marked as "completed" by clicking on it. When clicked, the `checkStatus` function toggles the `status` state from `false` to `true`.
   - If the `status` state is `true`, the `completetodo` CSS class is added to the list item, which:
     - **Strikethrough Effect**: Applies a line through the text using `text-decoration: line-through;`.
     - **Color Change**: Changes the text color to red and the background color to yellow, visually indicating that the task is complete.

4. **Deleting To-Do Items**:
   - Clicking the delete button (cross sign) next to a task triggers the `deleteRow` function.
   - This function removes the selected task from the `todoList` array by filtering out the item based on its index, effectively deleting it from the list and updating the UI.

5. **User Feedback via Notifications**:
   - If a user attempts to add a task that already exists in the list, a warning notification is displayed using the `NotificationManager.warning` function. This prevents duplicate tasks from being added to the list.

This project leverages React's state management and dynamic rendering to create an interactive to-do list where tasks can be added, marked as complete (with a strikethrough line), or deleted, all while providing real-time feedback to the user through notifications.

