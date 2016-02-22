# Framework
  - You must have:
    - NodeJs installed.
    - Java installed.
    - Selenium server installed and running: http://www.seleniumhq.org/download/
  - Start the selenium server from command line:
    <pre><code>java -jar selenium-server-standalone-2.49.0.jar</code></pre>
  - In the {projectRootFolder} update all node dependencies.
    From the prompt execute the command: <pre><code>npm install</code></pre> 
  - Set your project settings in the file /test/config.js. It is where you should save the SUT base url for each env.
  - Tests:
    Write your feature files under /test/features
  - Page Elements:
    Save your element mappings under /test/PageObjects
  - Testing Data
    Save your testing data under the folder /test/Data
  - Run all the test from the prompt with:
  <pre><code>cd {projectRootFolder}/test
  node run.js
  </code></pre>
