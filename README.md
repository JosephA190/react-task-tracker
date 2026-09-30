# React Task Tracker

This project was built for HCC INEW-2434 Module 2: React Frontend Foundations, extending the provided starter project.

## Features Added
- Filter tasks by All, Active, and Completed
- Edit existing task titles inline

## What this project demonstrates

- React functional components
- Props and parent-child communication
- `useState`
- Form events and validation
- List rendering with stable keys
- Conditional rendering
- Responsive CSS
- Basic accessibility practices

## Prerequisites

Install:

1. Node.js LTS from https://nodejs.org/en/download/
2. An editor or IDE. Recommended options are PyCharm, Visual Studio Code, or IntelliJ IDEA Community Edition.

## Run the project

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To create a production build:

```bash
npm run build
```

## PyCharm setup

1. Download PyCharm from https://www.jetbrains.com/pycharm/download/.
2. Open PyCharm and choose **Open**.
3. Select the `react-task-tracker` folder.
4. Open the built-in terminal from **View > Tool Windows > Terminal**.
5. Run `npm install`.
6. Run `npm run dev`.
7. Open the URL displayed in the terminal.

## VS Code setup

1. Download VS Code from https://code.visualstudio.com/.
2. Choose **File > Open Folder**.
3. Select this project folder.
4. Open **Terminal > New Terminal**.
5. Run `npm install`, then `npm run dev`.

## Common problems

**`npm: command not found`**: Node.js is not installed or the terminal must be restarted after installation.

**Port already in use**: Open the alternative URL printed by Vite, or stop the other development server.

**Blank page**: Check the terminal for errors and confirm the file names match the imports exactly.

**Changes do not appear**: Save the file and refresh the browser. Vite normally reloads the page automatically.