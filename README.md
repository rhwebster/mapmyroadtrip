<br />
<p align="center">
  <a href="https://map-my-road-trip.herokuapp.com/login">
    <img src="https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/map.png"  alt="Logo" width="auto" height="100">
  </a>
  
<h1 align="center"> Trip Keeper </h1>

Trip Keeper is designed for adventure seekers who would love an application to keep track of their previous road trips and all it entails. With the ability to add personalized journal entries to each trip you take users will always have a way to remember their favorite places visited. In addition, the built in photo album tool gives users the capability to walk down memory lane at any time. The interactive google map feature brings all roadtrips to life and allows users to see where they've been and have yet to go. Utilizing Trip Keeper is an easy to use app which allows users to organize and relive some of their most fun adventures. Check out Trip Keeper [here](https://map-my-road-trip.herokuapp.com/login).

### Built With

#### Front End

<a href="https://www.javascript.com/"><img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" /></a>
<a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" /></a>
<a href="https://redux.js.org/"><img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=Redux&logoColor=white" /></a>
<a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=React-Router&logoColor=white" /></a>
<a href="https://developers.google.com/maps"><img alt="Google Maps" src="https://img.shields.io/badge/-Google%20Maps-4285F4?style=flat-square&logo=Google%20Maps&logoColor=white" /></a>
<a href="https://devdocs.io/css/"><img alt="CSS3" src="https://img.shields.io/badge/-CSS3%20-61DAFB?style=flat-square&logo=CSS&logoColor=white&color=brightgreen"/></a>
<a href="https://devdocs.io/html/"><img alt="HTML5" src="https://img.shields.io/badge/-HTML5%20-61DAFB?style=flat-square&logo=HTML5&logoColor=white&color=blue"/></a>


#### Back End

<a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white&" /></a>
<a href="https://flask.palletsprojects.com/en/1.1.x/"><img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white" /></a>
<a href="https://www.postgresql.org/"><img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white" /></a>
<a href="https://aws.amazon.com/"><img alt="Amazon AWS" src="https://img.shields.io/badge/-Amazon%20AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white" /></a>
<a href="https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html"><img alt="boto3" src="https://img.shields.io/badge/-boto3%20-232F3E?style=flat-square&logo=boto3&logoColor=white" /></a>

#### Deployment and Package Management

<a href="https://docker.com/"><img alt="Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" /></a>
<a href="#"><img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" /></a>
<a href="https://www.npmjs.com/"><img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" /></a>
<a href="https://heroku.com/"><img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=Heroku&logoColor=white" /></a>

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

