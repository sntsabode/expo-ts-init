# Welcome to `expo-ts-init`

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-MIT-green.svg" />
  </a>
  <a href="https://badge.fury.io/js/expo-ts-init"><img src="https://badge.fury.io/js/expo-ts-init.svg" alt="npm version" height="18"></a>
</p>

> `expo-ts-init` is a small, no dependencies tool that initializes an Expo managed TypeScript React Native application with Redux and React Navigation pre-configured.

## Prerequisites

***Use other versions at own risk***

* node >=16.13.0

* yarn >=1.22.17

* expo-cli >=4.12.1

## Installation

***assuming node.js is installed on your machine***

### Install from NPM

```
npm i expo-ts-init -g
```

### Install from source

```sh
git clone https://github.com/sntsabode/expo-ts-init
```

```sh
cd expo-ts-init
```

```sh
npm i -g
```

## Usage

```sh
expo-ts-init MyApp
```

The `expo-ts-init` command takes in one argument; the name of the Expo app being generated. This argument will be passed into the call to `expo init`, meaning a directory with the same name will be created in the current working directory. This directory is your app, and the boilerplate will be written into the same directory.

Running the `expo-ts-init` command will generate the initial project structure and install the necessary dependencies:

```
MyApp
├── .expo-shared
├── assets
├── node_modules
├── src
|   ├── app
|   |   ├── hooks
|   |   |   └── redux
|   |   |       └── index.ts
|   |   ├── reducers
|   |   |   └── dummy
|   |   |       └── index.ts
|   |   └── store
|   |       └── index.ts
|   ├── components
|   |   └── Goodluck
|   |       └── index.tsx
|   ├── navigationStack
|   |   └── index.tsx
|   ├── screens
|   |   └── Home
|   |       └── index.tsx
|   └── styles
|       └── index.ts
├── .gitignore
├── app.json
├── App.tsx
├── babel.config.js
├── package.json
├── tsconfig.json
└── yarn.lock
```

Once it's finished...

```sh
cd MyApp

yarn start
```

Happy hacking.

## Author

👤 **Sihle Masebuku**

* Github: [@sntsabode](https://github.com/sntsabode)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
