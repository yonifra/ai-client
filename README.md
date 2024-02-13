
# ChatGPT Client: A Simple Node.js Interface

### Introduction
This lightweight and easy-to-use Node.js library provides seamless integration with OpenAI's ChatGPT service, empowering you to add AI functionalities to your projects with minimal effort.

### Key Features
* **Intuitive Defaults:** Smart defaults automatically fill in missing parameters, eliminating the need for complex configurations (e.g., selecting the optimal model).
* **Readable Code:** Well-structured code facilitates debugging and understanding.
* **Compact Footprint:** Currently resides in a single file, prioritizing a minimal code size (future expansion is possible).

### Getting Started

1. Obtain an OpenAI API Key:

* Visit the [OpenAI API page](https://openai.com/blog/openai-api) and create an account.
* Generate an API key (may require payment information as API calls incur costs).
* **Pro Tip:** Securely store your API key in a `.env` file at your project root (exclude it from your `.gitignore` file).

2. Installation:

* Execute `npm install ai-client` in your project directory.
* Import the code: `import * as AIClient from 'ai-client'`


3. Initialization:

* Create an instance of the `AIClient` class, passing your API key, desired model, and any optional parameters.

4. Run Prompts:
* Utilize the AIClient object to execute your prompts.


**Made with ❤️ by [yonifra](https://github.com/yonifra)**