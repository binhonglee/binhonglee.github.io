<template>
  <div id="app">
    <heading/>
    <infobox id="top"/>
    <genericboxes :items="about" id="about"/>
    <bulletedtextbox :items="experiences" id="experiences"/>
    <bulletedtextbox :items="education" id="education"/>
    <imagelabel :items="projects" id="projects"/>
    <bulletedtextbox :items="articles" :lineHeight="'close'" id="articles"/>
    <bulletedtextbox :items="community" :lineHeight="'close'" id="community"/>
    <bulletedtextbox :items="awards" :lineHeight="'close'" id="awards"/>
    <imagelabel :items="media" id="media"/>
    <contacts id="bottom"/>
  </div>
</template>

<script>
import heading from './components/Heading'
import infobox from './components/Infobox'
import bulletedtextbox from './components/BulletedTextBox'
import genericboxes from './components/GenericBoxes'
import imagelabel from './components/ImageLabel'
import contacts from './components/Contacts'
export default {
  name: 'app',
  components: {
    heading,
    infobox,
    bulletedtextbox,
    genericboxes,
    imagelabel,
    contacts
  },
  data () {
    return {
      about: {
        name: 'About',
        things: [
          'Programming languages:<br/><b>Java, C++, JavaScript</b>, Kotlin, Android (Java/Kotlin), Shell (Bash), C, Python, Powershell, Matlab',
          'Other skills / tools include:<br>Git, ReactJS, Vue.js, CI (Travis-CI / circleCI), ExpressJS, Alexa (node.js), Gradle, Maven Apache, CodeCov, Raspberry Pi, Mac, Linux, Windows, Apache Ant, Microcontroller',
          '<figure><embed src="https://wakatime.com/share/@binhonglee/9272127a-c588-4102-b229-37322aa12233.svg" style="max-width: 700px"></embed></figure>'
        ]
      },
      education: {
        name: 'Education',
        things: [
          {
            primary: 'Bachelor of Science in Software Engineering',
            secondary: 'Arizona State University',
            date: 'August 2014 - May 2017',
            details: [
              '<b>Mentor</b>, Devils Invent Healthcare 2017',
              '<b>Co-organizer</b>, HacksforHumanity 2016',
              '<b>Mentor</b>, Fulton Furnace Fallout 2016',
              '<b>Judge</b>, Woodside Community Challenge 2015',
              '<b>Mentor</b>, HacksforHumanity 2015'
            ]
          },
          {
            primary: '',
            secondary: 'European Innovation Academy',
            date: 'July 2016',
            details: [
              'Plans development progress and sprints, make sure team progress is on schedule',
              'Built an Android app for beta testing'
            ]
          },
          {
            primary: 'American Degree Transfer Program',
            secondary: 'INTI International College Penang',
            date: 'April 2012 - January 2014',
            details: [
              '<b>Founding President</b>, Robotics Club',
              '<b>Online Marketing Director & Technical Support</b>, Junior World Entrepreneurship Forum - Exabyte Startup Boss',
              '<b>Graphic Designer & Technical Support</b>, The American Dream & The Obama Administration (Forum)'
            ]
          }
        ]
      },
      experiences: {
        name: 'Experiences',
        things: [
          {
            primary: 'Siri Language Engineer (AdvantisGlobal)',
            secondary: 'Apple Inc.',
            date: 'December 2017 - Present',
            details: [
              'Improve the user experience for Siri users Malay language (mostly Malaysians, Indonesians and Singaporeans) across all platform '
            ]
          },
          {
            primary: 'Founding Software Engineer',
            secondary: 'Humanity X Technologies LLC',
            date: 'September 2014 - November 2017',
            details: [
              'Save up to 3 hours of setup time per machine per developer through Ansible provisioning script for vagrant.',
              'Develop and maintain a client side RESTful API plug that takes in real time data (up to 20,000 data points) and analyze it to be shown to clients.'
            ]
          },
          {
            primary: 'LEGO Robotic Tutor',
            secondary: 'Bukit Gambir Elementary School, Penang, Malaysia',
            date: 'March 2014 - April 2014',
            details: [
              'Intensive training for new students with no previous experience',
              'Provided competition insights through personal experience',
              'Giving feedbacks and suggestions on their problem solving solution',
              'Learned to better communicate and explain matters in a simpler language'
            ]
          }
        ]
      },
      articles: {
        name: 'Guest Writing',
        things: [
          {
            primary: '<a href="https://codeburst.io/getting-started-with-travis-ci-f3223082f256">Getting started with Travis-CI</a>',
            secondary: '<a href="https://codeburst.io/">codeburst.io</a>',
            date: 'Apr 2018'
          },
          {
            primary: '<a href="https://hackernoon.com/restful-api-with-spark-kotlin-f43bd57affc4">RESTful API with Spark Kotlin</a>',
            secondary: '<a href="https://hackernoon.com">Hacker Noon</a>',
            date: 'Mar 2018'
          },
          {
            primary: '<a href="https://medium.com/yesphx-stories/hackathons-arizona-state-university-7d977c67509b">Hackathons @ Arizona State University</a>',
            secondary: '<a href="https://medium.com/yesphx-stories">#yesphx stories</a>',
            date: 'Jan 2017'
          }
        ]
      },
      community: {
        name: 'Community',
        things: [
          {
            primary: 'Speaker (Web Dev with ReactJS)',
            secondary: 'SunHacks',
            date: 'Apr 2018'
          },
          {
            primary: 'Speaker (RESTful API with ExpressJS)',
            secondary: 'Hack the Fog',
            date: 'Mar 2018'
          },
          {
            primary: 'Mentor',
            secondary: 'TreeHacks',
            date: 'Feb 2018'
          },
          {
            primary: 'Mentor',
            secondary: 'HackDavis',
            date: 'Jan 2018'
          },
          {
            primary: 'Speaker (Introduction to Git)',
            secondary: 'Hacks for Humanity',
            date: 'Oct 2017'
          },
          {
            primary: 'Mentor',
            secondary: 'Devils Invent: Cybersecurity',
            date: 'September 2017'
          },
          {
            primary: 'Judge',
            secondary: 'Rising Tycoons',
            date: 'June 2017'
          },
          {
            primary: 'Mentor',
            secondary: 'SouthWest Hacks',
            date: 'March 2017'
          },
          {
            primary: 'Judge',
            secondary: 'CodeDay Phoenix',
            date: 'February 2017'
          },
          {
            primary: 'Robot Design Judge',
            secondary: 'FIRST LEGO League - Arizona State Championship',
            date: 'January 2017'
          },
          {
            primary: 'Mentor',
            secondary: 'Fulton Furnace Fallout',
            date: 'Fall 2016'
          },
          {
            primary: 'Shaper',
            secondary: 'Global Shapers Community, George Town Hub',
            date: 'March 2014 - August 2014'
          }
        ]
      },
      awards: {
        name: 'Awards',
        things: [
          {
            primary: 'Changemaker Entrepreneur of the Year',
            secondary: 'Pitchfork awards',
            date: '2016'
          },
          {
            primary: 'Finalist',
            secondary: 'Pakis Social Entrepreneurial Challenge',
            date: '2016'
          },
          {
            primary: '2nd place',
            secondary: 'Startup Weekend Phoenix',
            date: '2015'
          },
          {
            primary: 'Grand Prize Award Winner',
            secondary: 'Changemaker Innovation Challenge',
            date: '2015'
          },
          {
            primary: '1st place',
            secondary: 'Hacks4Humanity 2014',
            date: '2014'
          },
          {
            primary: 'International Success Award',
            secondary: 'New American University Scholar',
            date: '2014'
          },
          {
            primary: 'Unity Game Jam Penang 2014',
            secondary: '1st Place',
            date: '2014'
          },
          {
            primary: 'Gold Medal',
            secondary: 'World Robot Olympiad',
            date: '2010'
          }
        ]
      },
      projects: {
        name: 'Projects',
        things: [
          {
            url: 'https://breakups.life',
            image: 'https://binhong.me/images/breakups.PNG',
            primary: 'Breakups (Webapp)',
            secondary: 'JavaScript [node.js, ReactJS, ExpressJS]<br>Android [Kotlin]'
          },
          {
            url: 'https://git.binhong.me/binhong/Dota2-Random',
            image: 'https://binhong.me/images/dota2Random.png',
            primary: 'Dota2 Random (Alexa)',
            secondary: 'Javascript [node.js, alexa-sdk]<br>Travis-CI, CodeCov'
          },
          {
            url: 'https://git.binhong.me/binhong/LibrarySystem',
            image: 'https://binhong.me/images/LibrarySystem.png',
            primary: 'Library System (Java)',
            secondary: 'Java [swing, JUnit], Maven Apache<br>Travis-CI, CodeCov'
          },
          {
            url: 'https://git.binhong.me/binhong/SunriseAlarmClock',
            image: 'https://binhong.me/images/sunriseac.png',
            primary: 'Sunrise Alarm Clock',
            secondary: 'C, ATMEGA168P'
          },
          {
            url: 'https://git.binhong.me/binhong/TicketingSystem',
            image: 'https://binhong.me/images/TicketingSystem.png',
            primary: 'Ticketing System (CLI)',
            secondary: 'C++, Apache Ant, Travis-CI'
          },
          {
            url: 'https://binhong.me/7thLoop',
            image: 'https://binhong.me/images/7thloop.png',
            primary: '7thLoop (Webapp)',
            secondary: 'JavaScript [Quintus]'
          }
        ]
      },
      media: {
        name: "Media",
        things: [
          {
            url: 'https://www.youtube.com/watch?v=lrek6FrYVrg',
            image: 'https://binhong.me/images/fox10.jpg'
          },
          {
            url: 'https://asunow.asu.edu/content/changemaker-challenge-winners-reach-out-those-expressing-thoughts-suicide-social-media',
            image: 'https://binhong.me/images/asu.jpg'
          },
          {
            url: 'http://www.sinchew.com.my/node/1208817',
            image: 'https://binhong.me/images/sinchew.png'
          },
          {
            url: 'http://www.statepress.com/article/2015/09/ark-humanity-app-save-lives',
            image: 'https://binhong.me/images/statepress.jpg'
          },
          {
            url: 'https://www.facebook.com/notes/457398051261/',
            image: 'https://binhong.me/images/kwongwah.jpg'
          },
          {
            url: 'https://binhong.me/images/skor_news.jpg',
            image: 'https://binhong.me/images/berita_harian.jpg'
          }
        ]
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Oxygen');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.left-lining {
    border-left-width: 5px;
    border-left-style: solid;
    border-left-color: rgb(4, 180, 95);
    margin: 10px 0 10px;
    padding: 10px 20px 10px 20px;
}

.defaultboxes {
    font-family: 'Oxygen';
    margin-left: auto;
    margin-right: auto;
    max-width: 1011px;
    padding-top: 25px;
    padding-bottom: 5px;
}

.date {
    float: right;
}

a {
    color: #026435;
}

a:hover,
a:focus {
    color: #0B486B;
}

h2 {
    font-family: 'Fira Sans';
    font-weight: bold;
    font-size: 30px;
    letter-spacing: -0.5px;
    margin: 0px;
}
</style>
