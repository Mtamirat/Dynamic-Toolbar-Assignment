Dynamic Toolbar Assignment

Overview

This project is a React application built using Vite. It demonstrates how to dynamically render components using an array of data and the .map() function.
The application displays a toolbar with multiple buttons. Each button shows a different alert message when clicked.

Features
Dynamically renders buttons using .map()
Each button displays a unique alert message
Reusable AlertButton component
Uses props and children for flexibility

Test Cases

Normal Cases
Clicking "Download File" shows "Downloading!"
Clicking "Share Document" shows "Sharing!"
Clicking "Upload File" shows "Uploading!"

Edge Cases
Empty message → alert appears blank
Empty button text → button shows no label
Null message → alert displays null or no value

Conclusion
This project demonstrates how to build scalable and reusable components in React by using dynamic data rendering and props.
