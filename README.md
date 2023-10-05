## AI Client
#### A simple ChatGPT interface for node

#### What is this?

As the title implies, this package is a lightweight and easy-to-use utility for interacting with OpenAI's ChatGPT service. It's great for when you want to add some AI abilities to your projects and strives to be as simple as possible by:

* Adding logical defaults for when you're not sure what the configuration should be. (For example, which `model` should you use)
* Making the code as readable as possible for when you want to debug it.
* Simple package - currently one small file that does the job. (Later this might be expanded, but I always strive for an as small as possible package)

### Installation

* Obtain an OpenAI API key by going to [OpenAI API](https://openai.com/blog/openai-api) page, signing up and getting an API key. (This may require you to add some payment information as calling their API costs money)
* [TIP] Add the API key to the `.env` file in the root of your project to avoid exposing it out in GitHub (also, make sure to exclude the file in your `.gitignore` file)
* Run `npm i ai-client` in the root of your project. (This will add the package to your project's dependencies)
* Import the code into your Javascript application by adding `import * as AIClient from 'ai-client'`
* Initialize the client by passing it the API key, model you wish to use and other parameters you might want to tweak.
* Use `AIClient` to run the prompts