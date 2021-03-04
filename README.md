<br />
<p align="center">
  <a href="https://map-my-road-trip.herokuapp.com/login">
    <img src="https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/map.png"  alt="Logo" width="auto" height="100">
  </a>
  
<h1 align="center"> Trip Keeper </h1>

Trip Keeper is designed for adventure seekers who would love an application to keep track of their previous road trips and all it entails. With the ability to add personalized journal entries to each trip you take users will always have a way to remember their favorite places visited. In addition, the built in photo album tool gives users the capability to walk down memory lane at any time. The interactive google map feature brings all roadtrips to life and allows users to see where they've been and have yet to go. Utilizing Trip Keeper is an easy to use app which allows users to organize and relive some of their most fun adventures. Check out Trip Keeper [here](https://map-my-road-trip.herokuapp.com/login).

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
2. Create .env file based on example .env-example file `touch .env`
3. Create frontend .env file based on example .env-frontend-example `cd react-app/ && touch .env`
4. Install backend dependencies `cd mapmyroadtrip/ && pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
5. Install frontend dependencies `cd ../react-app && npm install`
6. Start virtual environment in frontend `cd .. && pipenv shell`
7. Apply the migration to the database `flask db upgrade`
8. Seed the database `flask seed all`
9. Start backend `flask run`
10. Open new terminal and start frontend `cd ../react-app && npm start`
11. Open browser to http://localhost:3000/

### Features
#### 1
![Alt text]()

#### 2  
![Alt text](g)

#### 3
![Alt text]()

#### 4
![Alt text]()

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

### Deploy to Heroku

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

