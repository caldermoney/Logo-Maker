# Logo Maker

A simple, interactive CLI tool that lets you generate SVG logos with custom text and shapes. Crafted with Node.js.

![Demo Image](./examples/Logo.svg)

## Features

- **Interactive CLI**: Answer a few questions, and get an SVG logo in seconds.
- **Customizable**: Choose the name, shape, and colors.
- **Shapes Supported**: Triangle, Circle, Square.
- **Color Support**: Both named colors and HEX values are supported.

## Installation

1. Clone this repository:
git clone https://github.com/caldermoney/logo-maker.git

2. Navigate to the project directory:
cd logo-maker

3. Install the required packages:
npm install inquirer fs

## Usage

Simply run the following command:
node index.js

Answer the prompts to customize your logo, and the SVG will be saved as `logo.svg` in the project directory.

## Testing

Testing for SVG shape rendering is done using Jest.

To run tests:

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Ensure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments

