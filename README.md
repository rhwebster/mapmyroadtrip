[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url3]
[![LinkedIn][linkedin-shield]][linkedin-url1]
[![LinkedIn][linkedin-shield]][linkedin-url2]
[![LinkedIn][linkedin-shield]][linkedin-url]
<!--ReactSkipperStart -->

<br />
<p align="center">
  <a href="https://map-my-road-trip.herokuapp.com/login">
    <img src="https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/map.png"  alt="Logo" width="auto" height="100">
  </a>
  
<h1 align="center"> Trip Keeper </h1>

Trip Keeper is designed for adventure seekers who would love an application to keep track of their previous road trips and all it entails. With the ability to add personalized journal entries to each trip you take users will always have a way to remember their favorite places visited. In addition, the built in photo album tool gives users the capability to walk down memory lane at any time. The interactive google map feature brings all roadtrips to life and allows users to see where they've been and have yet to go. Utilizing Trip Keeper is an easy to use app which allows users to organize and relive some of their most fun adventures. Check out Trip Keeper [here](https://map-my-road-trip.herokuapp.com/).

### Built With

#### Front End

<a href="https://www.javascript.com/"><img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" /></a>
<a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" /></a>
<a href="https://redux.js.org/"><img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=Redux&logoColor=white" /></a>
<a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=React-Router&logoColor=white" /></a>
<a href="https://developers.google.com/maps"><img alt="Google Maps" src="https://img.shields.io/badge/-Google%20Maps-4285F4?style=flat-square&logo=Google%20Maps&logoColor=white" /></a>
<a href="https://devdocs.io/css/"><img alt="CSS3" src="https://img.shields.io/badge/-CSS3%20-61DAFB?style=flat-square&logo=CSS3&logoColor=white&color=brightgreen"/></a>
<a href="https://devdocs.io/html/"><img alt="HTML5" src="https://img.shields.io/badge/-HTML5%20-61DAFB?style=flat-square&logo=HTML5&logoColor=white&color=blue"/></a>


#### Back End

<a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white&" /></a>
<a href="https://flask.palletsprojects.com/en/1.1.x/"><img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white" /></a>
<a href="https://www.postgresql.org/"><img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white" /></a>
<a href="https://aws.amazon.com/"><img alt="Amazon AWS" src="https://img.shields.io/badge/-Amazon%20AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white" /></a>
<a href="https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html"><img alt="boto3" src="https://img.shields.io/badge/-boto3-000000?style=flat-square&logo=boto3&logoColor=yellow&color=yellow" /></a>


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
#### Inviting splash page with the ability to see Trip Keeper's functionality in full prior to sign up with its demo login
![Alt text](https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/home.png)

#### Easy navigation available on each page with access to a feed of all journal entries, all trips, a summary of where all journal entries took place on a google map, and a complete photo album of all previously added pictures. 
![Alt text](https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/dashboard.png)

#### Google Maps feature displaying most updated list of where journal entries took place. Bonus features include the ability to zoom in and out, street view, access to entire world view, and satelite view.
![Alt text](https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/allEntriesMap.png)

#### Live time map updates as you choose a start and end destination for your road trip. Auto complete drop-downs available to help prefill exact location latitude and longitudes. Want to keep this trip to yourself or share it to the World? No problem, just check or uncheck whether to share your trip! 
![Alt text](https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/newTripEntry.png)

#### Ability to add a new journal entry per trip. Can customize both the title and entry per entry as well as upload a photo for each entry.
![Alt text](https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/newJournalEntry.png)

#### Beautiful full screen display of photos taken throughout all trips taken.
![Alt text](https://raw.githubusercontent.com/rhwebster/mapmyroadtrip/main/react-app/public/images/photoAlbum.png)

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

[contributors-shield]: https://img.shields.io/github/contributors/rhwebster/mapmyroadtrip.svg?style=for-the-badge
[contributors-url]: https://github.com/rhwebster/mapmyroadtrip/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rhwebster/mapmyroadtrip.svg?style=for-the-badge
[forks-url]: https://github.com/rhwebster/mapmyroadtrip/network/members
[stars-shield]: https://img.shields.io/github/stars/rhwebster/mapmyroadtrip.svg?style=for-the-badge
[stars-url]: https://github.com/rhwebster/mapmyroadtrip/stargazers
[issues-shield]: https://img.shields.io/github/issues/rhwebster/mapmyroadtrip.svg?style=for-the-badge
[issues-url]: https://github.com/rhwebster/mapmyroadtrip/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url3]: https://www.linkedin.com/in/samantha-butler-410675178/
[linkedin-url1]: https://www.linkedin.com/in/ryan-webster-a784509b/
[linkedin-url2]: https://www.linkedin.com/in/ahdari-scott-916225117/
[linkedin-url]: https://www.linkedin.com/in/autumnwiggins/


