# ProblemShared

This is a UI automation framework.
It tests the Sign‑In functionality of the [Sauce Labs demo application](https://www.saucedemo.com/).

## 📁 Project Structure
```
problemsharedtests/
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.ts
└── src/
    └── pages/
        └── LoginPage.ts
└── tests/
    └── login.spec.ts
```

## 🚀 Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### 2. Create the project
Open a terminal and create a new folder, then initialise the project:
```bash
mkdir problemsharedtests
cd problemsharedtests
npm init -y
```

### 3. Install dependencies
Install Playwright and TypeScript as dev dependencies:
```bash
npm install -D @playwright/test typescript
```

### 4. Install browsers
Playwright needs its own browser binaries. Run:
```bash
npx playwright install
```

### 5. Add the framework files
Copy all the files listed above into the project folder, keeping the directory structure.


## 🧪 Running the Tests

To execute all the tests, simply run:
```bash
npm test
```

This will:
- Launch a Chromium browser (headless by default)
- Run the three login scenarios
- Display results in the terminal

## 📊 Viewing Reports

After the test run, open the HTML report:
```bash
npx playwright show-report
```
The report shows pass/fail statuses, durations, and traces for any failed tests.

## 🧪 Test Scenarios Covered

| Test Case                                     | Credentials                         | Expected Result                           |
|-----------------------------------------------|-------------------------------------|-------------------------------------------|
| Successful login with valid credentials       | `standard_user` / `secret_sauce`    | Redirect to `inventory.html`              |
| Login attempt with a locked user              | `locked_out_user` / `secret_sauce`  | Error: “Sorry, this user has been locked out.” |
| Login attempt with an invalid password        | `standard_user` / `wrong_password`  | Error: “Username and password do not match …” |


---

Happy testing! 😊
