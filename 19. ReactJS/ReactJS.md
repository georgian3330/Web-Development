https://codesandbox.io/
## Local Development Setup

* **Step 1 : Download NodeJS** 

    Make sure you have the latest version of Node installed. If not head over to https://nodejs.org/en/download to download the LTS (Long Term Support) version of Node.

* **Step 2 : Download VS Code**

    Make sure you have the latest version of VSCode installed. If not, head over to https://code.visualstudio.com/download to download the version for your platform.

* **Step 3 : Open Terminal or Command Prompt**

    Open a Terminal or command prompt and navigate to the directory where you want to create your React project. (We covered how to do this in previous parts of the course, if this is confusing, I recommend skipping this lesson and continuing with the videos and using CodeSandbox).

* **Step 4 : Create a Vite app**

    Create a Vite app by running the following command in your Terminal or Command Prompt:

    ```
    npm create vite@latest my-react-app --template react
    ```

* **Step 5 : vite Installation**

    The first time, you won't have Vite installed. Type y to proceed. Then you'll be asked to select a framework. Use your down arrow to select React.

    ![vite installed](./images/vite%20installed.webp)

    ![react in vite](./images/react%20in%20vite.webp)

* **Step 6 : Selecting JavaScript**

    You'll be asked to select a variant, select Javascript.

    ![javascript in vite](./images/js%20in%20vite.webp)

    Then wait for the installation to finish, this will take a few minutes.

    ![npm install](./images/npm%20install.webp)

* **Step 7 : Change Directory**

    Change directory to the new app that you built.

    > `cd my-react-app`

* **Step 8 : Install Dependencies**

    Install dependencies:

    > `npm install`

    ![npm install](./images/run%20npm%20install.webp)

    When npm has installed all the necessary packages, open your project folder in VS Code. You should see a node modules folder:

    ![node module](./images/node%20modules.webp)

* **Step 9 : Start Server**

    Start the development server:

    > `npm run dev`

    Vite will compile your code every time your change anything and you can see the location of your development server in the output.

* **Step 10 : Open localhost server**

    Open the app in your browser by heading over to the local address shown. It's usually at `http://localhost:5173/`
    
    ![click localhost](./images/click%20localhost.webp)

    You can now work on this local version and Vite will automatically recompile your code as you make changes.

    ![vite react](./images/vite%20react.gif)

    Again, I recommend following the videos and using CodeSandbox, but if you are more advanced and prefer to develop locally then you should now be ready to adapt the video code to your local version.