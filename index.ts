enum ModelType {
  Gpt35Turbo = 'gpt-3.5-turbo',
  Gpt35Turbo0125 = 'gpt-3.5-turbo-0125',
  Gpt35Turbo16K = 'gpt-3.5-turbo-16k',
  Gpt35TurboInstruct = 'gpt-3.5-turbo-instruct',
  Gpt35Turbo0613 = 'gpt-3.5-turbo-0613',
  Gpt35Turbo16K0613 = 'gpt-3.5-turbo-16k-0613',
  Gpt4 = 'gpt-4',
  Gpt40613 = 'gpt-4-0613',
  Gpt432K = 'gpt-4-32k',
  Gpt432K0613 = 'gpt-4-32k-0613',
  Gpt4Turbo = 'gpt-4-0125-preview',
  Babbage = 'babbage-002',
  Davinci = 'davinci-002',
}

class AIClient {
  /**  Generates a response to a prompt
   * @param prompt The prompt to generate a response to
   * @param content The content of the previous message in the chat
   * @param openAiKey The OpenAI API key
   * @param maxTokensToUse The maximum number of tokens to use when generating the response
   * @param modelType The type of the model to use
   * @returns The generated response
   */
  async ask(
    prompt: string = '',
    content: string = '',
    openAiKey: string = '',
    maxTokensToUse: number = 1400,
    modelType: ModelType = ModelType.Gpt35Turbo0125
  ) {
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${openAiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: modelType,
            messages: [
              {
                role: 'system',
                content,
              },
              { role: 'user', content: prompt },
            ],
            max_tokens: maxTokensToUse,
          }),
        }
      )

      const data = await response.json()
      return data.choices[0].message.content
    } catch (error) {
      console.error('Error:', error.message)
      throw new Error('Failed to generate response')
    }
  }
}

module.exports = AIClient
