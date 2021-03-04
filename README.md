<br />
<p align="center">
  <a href="https://map-my-road-trip.herokuapp.com/login">
    <img src="https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/map.png"  alt="Logo" width="auto" height="100">
  </a>
  
<h1 align="center"> Trip Keeper </h1>

This application is made for embedded system Arduino lovers. Instructa-Robos allows you to keep track of your current projects through uploading each personalized project including the code you used to make it happen, and photos of your project. Need inspiration? Feel free to look at other users' projects and add varying functionalities to each project using your own creativity. With up to nine categories and counting you can expand your knowledge on all sorts of topics including analog, digital, communication, controls and much more! Feel free to check it out [here](https://map-my-road-trip.herokuapp.com/login).

### Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](https://sequelize.org/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [AWS S3](https://docs.aws.amazon.com/s3/index.html?nc2=h_ql_doc_s3)
* [Styled Components](https://styled-components.com/)
* [React Icons](https://react-icons.github.io/react-icons/)

### Installation

1. Clone the repo `git clone https://github.com/rhwebster/mapmyroadtrip.git`
2. Install backend dependencies `cd mapmyroadtrip/ && pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
3. Install frontend dependencies `cd ../react-app && npm install`
4. start virtual environment in frontend `cd .. && pipenv shell`
5. start backend `flask run`
6. Open new terminal and start frontend `cd ../react-app && npm start`
7. Open browser to http://localhost:3000/

### Features
#### 1
![Alt text]()

#### 2  
![Alt text](g)

#### 3
![Alt text]()

#### 4
![Alt text]()



# Flask React Project

This is the backend for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

8. Release your docker container to heroku

   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```

9. set up your database:

   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
   heroku run -a {NAME_OF_HEROKU_APP} flask seed all
   ```

10. Under Settings find "Config Vars" and add any additional/secret .env variables.

11. profit
