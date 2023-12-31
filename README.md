# 💈 MarqueeApp

[![Netlify Status](https://api.netlify.com/api/v1/badges/7a0634b0-a5eb-40a9-8995-619e36ca6f17/deploy-status)](https://app.netlify.com/sites/marqueeapp/deploys)

Enter text, rotate your screen, and see a few letters at a time scroll horizontally across the screen

[Figma](https://www.figma.com/file/506xtwNVhCEPM5IgKG7SZU/MarqueeApp?type=design&node-id=0%3A1&mode=design&t=rcbsvrYvxYGzawNA-1)

## How it was Created (Ignited)
The React Native/Expo boilerplate that I wanted to try out is called Ignite. Ignite's [docs](https://github.com/infinitered/ignite/blob/8ba15031cb50677d7d8fe30d2eec2d24b7269bd4/docs/Guide.md#ignite-cli) suggest to create the app by running 
```bash
npx ignite-cli@latest new PizzaApp
```

My app is going to be text that goes across the screen. There is an old (deprecated) html element, <marquee>marquee</marquee>, that scrolls across the screen. 

I had done some research about making a marquee on the web when I made one of my first web dev projects, [a stock exchange website](https://stock-exchange-softwarebyze.netlify.app/) ([github](https://github.com/softwarebyze/stock-exchange)). 

I thought it would be cool to make a marquee-like component for react native and maybe it would be fun to have an app I can open it up on my phone, enter someone's name, rotate my phone to landscape, and show the name scrolling across the screen. 

Since I decided to name it a Marquee, I ran:

```bash
npx ignite-cli@latest new MarqueeApp
```
, following the same naming convention as the docs.

A bonus would be web support 🌐

## Plan

2 screens:
- Input
- Marquee

### State
- text

### Input Screen
- Components
  - Label that says "Enter Text:"
  - Big multiline text input

### Marquee Screen
- Components
  - Marquee
    - only fits a few letters, goes across the full width of the screen (i think i dont want safe area insets, so it is ok to cover the status bar)
    - text scrolls across the screen horizontally
    - one line of text
    - when you rotate the screen back to vertical or tap the screen, you go back to the Input Screen
    - MarqueeContainer
      - take up the full screen
      - center MarqueeText vertically
      - have MarqueeText start with the left edge of the text flush with the left edge of the screen
    - MarqueeText
      - text that user defined
      - takes up most of the screen
      - animated
      - bonus for a cool, pixel font like 8 bit


Below, I will leave the default readme that is generated by `ignite-cli`:

# Welcome to your new ignited app!

[![CircleCI](https://circleci.com/gh/infinitered/ignite.svg?style=svg)](https://circleci.com/gh/infinitered/ignite)

## The latest and greatest boilerplate for Infinite Red opinions

This is the boilerplate that [Infinite Red](https://infinite.red) uses as a way to test bleeding-edge changes to our React Native stack.

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- And more!

## Quick Start

The Ignite boilerplate project's structure will look similar to this:

```
ignite-project
├── app
│   ├── components
│   ├── config
│   ├── i18n
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   └── app.tsx
├── assets
│   ├── icons
│   └── images
├── test
│   ├── __snapshots__
│   ├── mockFile.ts
│   └── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   └── templates
|       |── app-icon
│       ├── component
│       ├── model
│       ├── navigator
│       └── screen
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

### ./app directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Native.

The inside of the `app` directory looks similar to the following:

```
app
├── components
├── config
├── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

**components**
This is where your reusable components live which help you build your screens.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./assets directory

This directory is designed to organize and store various assets, making it easy for you to manage and use them in your application. The assets are further categorized into subdirectories, including `icons` and `images`:

```
assets
├── icons
└── images
```

**icons**
This is where your icon assets will live. These icons can be used for buttons, navigation elements, or any other UI components. The recommended format for icons is PNG, but other formats can be used as well.

Ignite comes with a built-in `Icon` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md).

**images**
This is where your images will live, such as background images, logos, or any other graphics. You can use various formats such as PNG, JPEG, or GIF for your images.

Another valuable built-in component within Ignite is the `AutoImage` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md).

How to use your `icon` or `image` assets:

```
import { Image } from 'react-native';

const MyComponent = () => {
  return (
    <Image source={require('../assets/images/my_image.png')} />
  );
};
```

### ./ignite directory

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find templates you can customize to help you get started with React Native.

### ./test directory

This directory will hold your Jest configs and mocks.

## Running Maestro end-to-end tests

Follow our [Maestro Setup](https://ignitecookbook.com/docs/recipes/MaestroSetup) recipe from the [Ignite Cookbook](https://ignitecookbook.com/)!

## Previous Boilerplates

- [2018 aka Bowser](https://github.com/infinitered/ignite-bowser)
- [2017 aka Andross](https://github.com/infinitered/ignite-andross)
- [2016 aka Ignite 1.0](https://github.com/infinitered/ignite-ir-boilerplate-2016)
