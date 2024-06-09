# react-native-tailwind-zustand-boilerplate

An opinionated React Native stack that incorporates TypeScript, Expo Router, TailwindCSS (via Nativewind), and Zustand for state management.

## 🚀 Quickstart Guide

Follow these steps to quickly set up your project:

1. Create a new project using nascript/react-native-tailwind-zustand-boilerplate:

   ```sh
   npx degit nascript/react-native-tailwind-zustand-boilerplate my-project
   ```

2. Navigate to your project directory and install the dependencies:

   ```sh
   cd my-project && yarn install
   ```

3. Start your development server:
   ```sh
   yarn start
   ```

## 🛠️ Included Tools

- **[Expo Router](https://github.com/expo/router):** A file-based router designed for universal React Native apps.
- **[TypeScript](https://www.typescriptlang.org/):** A strongly typed programming language that enhances JavaScript with better tooling at scale.
- **[Nativewind](https://www.nativewind.dev/):** Utilizes [Tailwind CSS](https://tailwindcss.com/) to create a universal style system for React Native.
- **[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction):** A minimal, fast, and scalable state management solution.

## 🪴 How to Use

### 📂 Folder Structure

Your project directory is organized as follows:
```
├───app
├───assets
│   └───images
├───components
└───lib
```


### ❓ What Goes Where

- **`app` Directory:** This directory contains your route files. For example, if you create a file named `hello.tsx` in the `app` directory, you can navigate to it using the `Link` component: `<Link href="/hello">Go to Hello</Link>`. For more details, refer to the [Expo Router documentation](https://github.com/expo/router).

- **`app/_layout.tsx`:** This file defines a layout for your screens. Modify this file if you want to include a constant header or footer across your app.

- **Splash Screen:** Edit the splash screen in `components/loadingscreen.tsx`. To adjust the display duration or make it wait for fonts to load, modify `app/_layout.tsx`.

### 🧭 Path Aliases

Path aliases help in importing files without using long relative paths. The following aliases are set up:

- `@assets`: Maps to `./assets`
- `@app`: Maps to `./app`
- `@components`: Maps to `./components`
- `@lib`: Maps to `./lib`

If you modify these aliases, ensure that you update both `tsconfig.json` and `babel.config.js`, then restart your app using:
    ```sh
    yarn start -c
    ```
    
By following these guidelines, you'll be able to efficiently navigate and manage your Chai Stack project.
