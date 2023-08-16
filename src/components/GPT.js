const { Configuration, OpenAIApi } = require('openai');

// Create an instance of the OpenAIApi class by passing a configuration object
const openai = new OpenAIApi(new Configuration({
    apiKey: "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" // your API key goes here
}));

// Define a function to generate text
const generateText = async (prompt) => {
    // Make a call to the createCompletion method of the OpenAIApi class
    // and pass in an object with the desired parameters
    const response = await openai.createCompletion({
        model: 'text-davinci-003', // specify the model to use
        prompt: prompt, // specify the prompt
        temperature: 0.8, // specify the randomness of the generated text
        max_tokens: 800, // specify the maximum number of tokens to generate
    });

    // Return the generated text from the response
    return response.data.choices[0].text;
}

// Call the generateText function and pass the prompt
async function generateHTMLInit(prompt) {
    const formattedPrompt = `Generate React Material-UI code for the following website: ${prompt}. Only output the code that should be inside the return function. Don't output the return function that is wrapped around the code. Assume all necessary imports are already included.`;
    const text = await generateText(formattedPrompt);
    return text;
}

export default generateHTMLInit;
//console.log(generateText("Generate HTML code for a side bar that includes 'home' and 'about' pages")); 