# Professional README Generator Starter Code

The Professional README Generator is an app in progress intended to generate a professional README.md file. 

## Expected Behavior
* When the program is run using "node index.js", prompts will appear to take in data from the user.
* The data will trigger an "await" property found in the async function of line 86, which will generate a markdown file in the docs directory of "Develop" or will display an error.
* The generated markdown file within the "docs" directory of "Develop" will contain a markdown document (currently called "test") with the data from user input in proper syntax with displayed badges and working links to licensing information.

## Actual Behavior

* There is an error with generating a markdown file with the await property in line 92, which is part of an aync function to initialize the app. No file is generated.
* "license" as used in generateMarkdown.js remains undefined, indicating the need for a variable or an error attemptign to pass through the information.

## Successes

* Became comfortable with syntax to call and provide information for rendering licence badges and links.
* Created functions to generate markdown documents with the proper syntax with calls to appropriate prompt information
* Learned to create badges and locate proper licensing information to display or a professional README
* 

## Concerns and Failures

* I am unsure about the starter code provided to create questions in an array rather than from a prompt. To circumvent this concern in an attempt to create any functional programming, a .prompt function was used to specify questions to take input and make choices.
* The generateMarkdown function found in index.js line 92 does not appear functional even on the test level. Unclear if it is referencing generateMarkdown.js as instructed in line 8 of index.js
* calls to prompt information may be incorrect 

## Work Map and TO-DOs

* Further testing to generate a document, even if blank
    * This will allow another document to be generated in the proper place, which will text syntax for data called in generateMarkdown.js
* Further research into creating another document with the use of arrays
    * Once a document is successfully generated, familiarizing with the array structure provided by the starter code may make more sense.
    * Current research shows that the prompt-sync node module may be of assistance
* Comparing closely the calls and variables involved in both index.js and generateMarkdown.js
    * If syntax is incorrect or certain veriables are used inappropriately, the module will not work  
* Seeking guidance and tutoring for the above concepts
* Re-recording the walk-through video to demonstrate functionality


## Resources and Links:

[Sheilds.io Badge Creator](https://shields.io/)
[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
