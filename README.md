# Advice Generator App

A small web app that fetches a random piece of advice from the Advice Slip API and displays it on a card. It is a solution to the [Advice generator app challenge](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) on Frontend Mentor.

## Live Demo

[View the live site](https://advice-generator-app-zeta-gray.vercel.app/)

## Overview

Each time the dice button is pressed, the app requests a new advice slip from the API and updates the card with the advice number and text. The first piece of advice is loaded automatically when the page opens.

### Features

- Fetches random advice from the Advice Slip API using the Fetch API and async/await
- Loads an initial piece of advice on page load
- Disables the button while a request is in progress to prevent overlapping requests
- Shows a friendly fallback message if the request fails
- Responsive layout with separate divider images for mobile and desktop
- Hover and active states on the button
- Announces new advice to screen readers through an `aria-live` region

## Built With

- HTML5
- Tailwind CSS
- JavaScript (ES modules)
- [Vite](https://vite.dev/)
- [Advice Slip API](https://api.adviceslip.com/)

## Getting Started

### Prerequisites

Node.js and npm installed on your machine.

### Installation

```bash
git clone https://github.com/Anees-ul-rehman-1/advice-generator-app.git
cd advice-generator-app
npm install
```

### Running Locally

```bash
npm run dev
```

Then open the local address printed in the terminal.

### Building for Production

```bash
npm run build
```

The production files are generated in the `dist` folder.

## What I Learned

- Making HTTP requests with `fetch` and reading the response body with `response.json()`
- Using `try`, `catch`, and `finally` to handle failures and always restore the button state
- Keeping dynamic content accessible with `aria-live` and descriptive button labels

## Acknowledgements

- Challenge by [Frontend Mentor](https://www.frontendmentor.io?ref=challenge)
- Advice data provided by the [Advice Slip API](https://api.adviceslip.com/)

## Author

Anees Ul Rehman
GitHub: [Anees-ul-rehman-1](https://github.com/Anees-ul-rehman-1)
Frontend Mentor: [Anees Ul Rehman](https://www.frontendmentor.io/profile/Anees-ul-rehman-1)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
