
Open the project folder where package.json is located and run 
###`npm install`###
for installing dependencies. Then running `npm start` will launch the development server at http://localhost:5000.

Change directory to Frontend where package.json for frontend application will be located. Run the same command
###`npm install`### for installing dependencies.

Run `npm start` to run frontend development server which will be launched at http://localhost:3000.

The MySQL database for the application is hosted in heroku ClearDB.   

The script for populating Database from the given dataset can be found in PopulateDB folder.

From client, an api call was made to endpoint http://localhost:5000/top50 for getting top 50 songs.

For Searching, a POST request with search keyword passed as a path parameter in the url was made to the 
endpoint http://localhost:5000/search/:keyword.  

On clicking on any song of top 50 list will open a modal with song details on the modal text. 
