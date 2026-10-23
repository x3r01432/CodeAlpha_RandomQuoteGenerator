# CodeAlpha Random Quote Generator

A simple app that shows inspiring quotes, built with React Native and Expo for the CodeAlpha App Development internship (Task 2).

## Features

- **Random quote on launch:** a random quote appears as soon as the app opens.
- **New Quote button:** each tap shows a different quote, and the same quote never appears twice in a row.
- **Clear layout:** every quote shows its text and its author.
- **Clean interface:** one centered card and a single button.
- **Works offline:** 30 quotes are bundled with the app, so no internet or API is needed.

## Tech stack

- React Native with Expo
- Runs on Android, iOS (through Expo Go), and the web

## Getting started

```bash
git clone https://github.com/x3r01432/CodeAlpha_RandomQuoteGenerator.git
cd CodeAlpha_RandomQuoteGenerator
npm install
npx expo start
```

Then scan the QR code with the **Expo Go** app on your phone, or press `w` to open it in the browser.

## Project structure

- `App.js`: the app screen and the random-quote logic
- `quotes.js`: the list of quotes and authors
- `app.json`: Expo configuration
- `assets/`: app icons and splash images

## Author

Built by [x3r01432](https://github.com/x3r01432) during the CodeAlpha App Development internship.
