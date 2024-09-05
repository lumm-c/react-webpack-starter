# React Webpack Starter

This repository serves as a starter template for building React applications with Webpack. It provides a basic setup for developers who want to get started quickly with React and Webpack, including support for JSX, ES6+, and hot module replacement.

## Features

- 🌓 **Dark/Light Theme Switching**: Toggle between light and dark modes.
- 🌐 **Multi-Language Support**: Easily switch between English and Chinese.
- 🔄 **Dynamic Updates**: Instant changes for both theme and language settings.

## Project Structure

```bash
react-webpack-starter/
├── public/                 # Static files
├── src/                    # React source code
│   ├── assets/             # Assets (images, fonts, etc.)
│   ├── components/         # React components
│   ├── pages/              # Page-level components
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions and helpers
│   │   └── i18n.js         # Language configuration
│   ├── App.js              # Main application component
├── docs/                   # Images for README and documentation
├── README.md               # Project documentation
├── package.json            # Project configuration
└── webpack.config.js       # Webpack configuration
```

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-webpack-starter.git
   cd react-webpack-starter
   ```
2. Install dependencies:
   ```bash
   npm install
   git submodule update --init --recursive
   npm run link-fonts
   ```
3. Running the Development Server
   ```bash
   npm start
   ```
4. Building for Production
   ```bash
   npm build
   ```

### Usage

Once the application is running, open http://localhost:3000 in your browser and you can:

- Switch between Light Mode and Dark Mode by clicking the toggle button.
- Switch between English and Chinese by clicking the toggle button.

### Screenshots

Here is an example of how the application looks:
![description](docs/day05.gif)


### Contribution

Contributions are welcome! Feel free to open issues or submit pull requests if you have any suggestions or improvements.

