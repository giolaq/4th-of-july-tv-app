# 4th of July TV App

A festive React Native application designed for Fire TV to celebrate Independence Day in the United States. This app features an interactive fireworks display and a patriotic color scheme.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- 🎆 Interactive fireworks animation
- 🇺🇸 US flag-inspired color scheme
- 📺 Optimized for Fire TV and other TV platforms
- 🎮 Remote control and on-screen button interactions

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js (LTS)](https://nodejs.org/en/)
- npm 
- [React Native development environment set up](https://reactnative.dev/docs/environment-setup)
- [Expo](https://docs.expo.dev/guides/building-for-tv/)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/giolaq/4th-of-july-tv-app.git
   ```

2. Navigate to the project directory:
   ```
   cd 4th-of-july-tv-app
   ```

3. Run Prebuild:
    ```
    export EXPO_TV=1
    npx expo prebuild --clean
    ```

4. Install the `expo-linear-gradient` package:
   ```
   npx expo install expo-linear-gradient
   ```

## Usage

1. Connect your [Fire TV via ADB](https://developer.amazon.com/docs/fire-tv/connecting-adb-to-device.html) 
    Remember to run
    ```
    adb connect <FIRE-TV-IP-ADDRESS>:<FIRE-TV_PORT>
    ```

2. Run the app with 
    ```
    npx expo run:android 
    ```

3. Navigate the app using your Fire TV remote:
   - Use the directional pad to focus on different buttons
   - Press 'Select' on the specific button to trigger the fireworks

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Contact

If you have any questions or want to reach out, please open an issue on this GitHub repository.

---

Made with ❤️ for 🇺🇸
