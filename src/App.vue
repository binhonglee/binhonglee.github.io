<template>
  <div id="app">
    <infobox id="top" />
    <genericboxes :items="about" id="about" />
    <bulletedtextbox :items="experiences" id="experiences" />
    <bulletedtextbox :items="education" id="education" />
    <imagelabel :items="projects" id="projects" />
    <bulletedtextbox :items="articles" :lineHeight="'close'" id="articles" />
    <bulletedtextbox :items="community" :lineHeight="'close'" id="community" />
    <bulletedtextbox :items="awards" :lineHeight="'close'" id="awards" />
    <imagelabel :items="media" id="media" />
    <contacts id="bottom" />
  </div>
</template>

<script>
import infobox from "./components/Infobox";
import bulletedtextbox from "./components/BulletedTextBox";
import genericboxes from "./components/GenericBoxes";
import imagelabel from "./components/ImageLabel";
import contacts from "./components/Contacts";
export default {
  name: "app",
  components: {
    infobox,
    bulletedtextbox,
    genericboxes,
    imagelabel,
    contacts,
  },
  data() {
    return {
      about: {
        name: "About",
        things: [
          "Programming languages:<br/>Hack, TypeScript, Shell, Go, Nim, C++, JavaScript",
          "Other skills / tools include:<br/>Git, ReactJS, VueJS, Build tools (Please, Buck), CI (Travis-CI / circleCI)",
        ],
      },
      education: {
        name: "Education",
        things: [
          {
            primary: "Bachelor of Science in Software Engineering",
            secondary: "Arizona State University",
            date: "May 2017",
            details: [
              "<b>Mentor</b>, Devils Invent Healthcare 2017",
              "<b>Co-organizer</b>, HacksforHumanity 2016",
              "<b>Mentor</b>, Fulton Furnace Fallout 2016",
              "<b>Judge</b>, Woodside Community Challenge 2015",
              "<b>Mentor</b>, HacksforHumanity 2015",
            ],
          },
          {
            primary: "",
            secondary: "European Innovation Academy",
            date: "July 2016",
            details: [
              "Plans development progress and sprints, make sure team progress is on schedule",
              "Built an Android app for beta testing",
            ],
          },
        ],
      },
      experiences: {
        name: "Experiences",
        things: [
          {
            primary: "Software Engineer",
            secondary: "Facebook Inc.",
            date: "Oct 2018 - Present",
            details: [
              "Launched new SERP experience for Workplace which improved visibility of more relavant results in addition to moving the stack away from unmaintained code base.",
            ],
          },
          {
            primary: "Siri Language Engineer (AdvantisGlobal)",
            secondary: "Apple Inc.",
            date: "Dec 2017 - Oct 2018",
            details: [
              "Improve the user experience for Siri Malay language users (mostly Malaysians, Indonesians and Singaporeans) across all platform",
            ],
          },
          {
            primary: "Founding Software Engineer",
            secondary: "Humanity X Technologies LLC",
            date: "Sept 2014 - Nov 2017",
            details: [
              "Save up to 3 hours of setup time per machine per developer through Ansible provisioning script for vagrant",
              "Develop and maintain a client side RESTful API plug that takes in real time data (up to 20,000 data points) and analyze it to be shown to clients",
            ],
          },
        ],
      },
      articles: {
        name: "Articles",
        things: [
          {
            primary:
              '<a href="https://codeburst.io/multi-language-support-build-tool-10bed20e6bbe">Multi-language Support Build Tool</a>',
            secondary: '<a href="https://codeburst.io/">codeburst.io</a>',
            date: "Aug 2019",
          },
          {
            primary:
              '<a href="https://www.freecodecamp.org/news/functional-and-flexible-shell-scripting-tricks-a2d693be2dd4/">Functional and flexible shell scripting tricks</a>',
            secondary:
              '<a href="https://www.freecodecamp.org/news/">freeCodeCamp</a>',
            date: "May 2019",
          },
          {
            primary:
              '<a href="https://hackernoon.com/test-driven-development-with-alexa-sdk-777f6b5e5486">Test Driven Development with Alexa SDK</a>',
            secondary: '<a href="https://hackernoon.com">Hacker Noon</a>',
            date: "Oct 2018",
          },
          {
            primary:
              '<a href="https://medium.freecodecamp.org/how-you-can-host-multiple-domain-names-and-projects-in-one-vps-7aed4f56e7a1">Multiple domain names and projects on one server</a>',
            secondary:
              '<a href="https://medium.freecodecamp.org/">freeCodeCamp</a>',
            date: "Aug 2018",
          },
          {
            primary:
              '<a href="https://codeburst.io/hosting-your-own-git-server-with-gitea-fc3298aa15ce">Hosting your own Git server with Gitea</a>',
            secondary: '<a href="https://codeburst.io/">codeburst.io</a>',
            date: "Aug 2018",
          },
          {
            primary:
              '<a href="https://codeburst.io/getting-started-with-travis-ci-f3223082f256">Getting started with Travis-CI</a>',
            secondary: '<a href="https://codeburst.io/">codeburst.io</a>',
            date: "Apr 2018",
          },
          {
            primary:
              '<a href="https://hackernoon.com/restful-api-with-spark-kotlin-f43bd57affc4">RESTful API with Spark Kotlin</a>',
            secondary: '<a href="https://hackernoon.com">Hacker Noon</a>',
            date: "Mar 2018",
          },
          {
            primary:
              '<a href="https://medium.com/yesphx-stories/hackathons-arizona-state-university-7d977c67509b">Hackathons @ Arizona State University</a>',
            secondary:
              '<a href="https://medium.com/yesphx-stories">#yesphx stories</a>',
            date: "Jan 2017",
          },
        ],
      },
      community: {
        name: "Community",
        things: [
          {
            primary: "Mentor",
            secondary: "TreeHacks",
            date: "Feb 2019",
          },
          {
            primary:
              '<a href="https://oct2018.desertcodecamp.com/session/1713">Speaker (Git-Good)</a>',
            secondary: "Desert Code Camp",
            date: "Oct 2018",
          },
          {
            primary: "Mentor",
            secondary: "HacksforHumanity 2018",
            date: "Oct 2018",
          },
          {
            primary: "Speaker (Web Dev with ReactJS)",
            secondary: "SunHacks",
            date: "Apr 2018",
          },
          {
            primary: "Speaker (RESTful API with ExpressJS)",
            secondary: "Hack the Fog",
            date: "Mar 2018",
          },
          {
            primary: "Mentor",
            secondary: "TreeHacks",
            date: "Feb 2018",
          },
          {
            primary: "Mentor",
            secondary: "HackDavis",
            date: "Jan 2018",
          },
          {
            primary: "Speaker (Introduction to Git)",
            secondary: "Hacks for Humanity",
            date: "Oct 2017",
          },
          {
            primary: "Mentor",
            secondary: "Devils Invent: Cybersecurity",
            date: "Sept 2017",
          },
          {
            primary: "Judge",
            secondary: "Rising Tycoons",
            date: "June 2017",
          },
          {
            primary: "Mentor",
            secondary: "SouthWest Hacks",
            date: "Mar 2017",
          },
          {
            primary: "Judge",
            secondary: "CodeDay Phoenix",
            date: "Feb 2017",
          },
          {
            primary: "Robot Design Judge",
            secondary: "FIRST LEGO League - Arizona State Championship",
            date: "Jan 2017",
          },
        ],
      },
      awards: {
        name: "Awards",
        things: [
          {
            primary: "Changemaker Entrepreneur of the Year",
            secondary: "Pitchfork awards",
            date: "2016",
          },
          {
            primary: "Finalist",
            secondary: "Pakis Social Entrepreneurial Challenge",
            date: "2016",
          },
          {
            primary: "2nd place",
            secondary: "Startup Weekend Phoenix",
            date: "2015",
          },
          {
            primary: "Grand Prize Award Winner",
            secondary: "Changemaker Innovation Challenge",
            date: "2015",
          },
          {
            primary: "1st place",
            secondary: "Hacks4Humanity 2014",
            date: "2014",
          },
          {
            primary: "International Success Award",
            secondary: "New American University Scholar",
            date: "2014",
          },
          {
            primary: "Unity Game Jam Penang 2014",
            secondary: "1st Place",
            date: "2014",
          },
          {
            primary: "Gold Medal",
            secondary: "World Robot Olympiad",
            date: "2010",
          },
        ],
      },
      projects: {
        name: "Projects",
        things: [
          {
            url: "https://wings.sh",
            image: "images/wings.png",
            primary: "wings",
            secondary: "Nim, TypeScript<br>Nimble, Please",
          },
          {
            url: "https://breakups.life",
            image: "images/breakups.PNG",
            primary: "Breakups (Webapp)",
            secondary: "JavaScript [node.js, ReactJS, ExpressJS]",
          },
          {
            url: "https://git.binhong.me/binhong/Dota2-Random",
            image: "images/dota2Random.png",
            primary: "Dota2 Random (Alexa)",
            secondary: "Javascript [node.js, alexa-sdk]<br>Travis-CI, CodeCov",
          },
          {
            url: "https://git.binhong.me/binhong/LibrarySystem",
            image: "images/LibrarySystem.png",
            primary: "Library System (Java)",
            secondary:
              "Java [swing, JUnit], Maven Apache<br>Travis-CI, CodeCov",
          },
          {
            url: "https://git.binhong.me/binhong/TicketingSystem",
            image: "images/TicketingSystem.png",
            primary: "Ticketing System (CLI)",
            secondary: "C++, Apache Ant, Travis-CI",
          },
          {
            url: "https://binhong.me/7thLoop",
            image: "images/7thloop.png",
            primary: "7thLoop (Webapp)",
            secondary: "JavaScript [Quintus]",
          },
        ],
      },
      media: {
        name: "Media",
        things: [
          {
            url: "https://www.youtube.com/watch?v=lrek6FrYVrg",
            image: "images/fox10.jpg",
          },
          {
            url:
              "https://asunow.asu.edu/content/changemaker-challenge-winners-reach-out-those-expressing-thoughts-suicide-social-media",
            image: "images/asu.jpg",
          },
          {
            url: "http://www.sinchew.com.my/node/1208817",
            image: "images/sinchew.png",
          },
          {
            url:
              "http://www.statepress.com/article/2015/09/ark-humanity-app-save-lives",
            image: "images/statepress.jpg",
          },
          {
            url: "https://www.facebook.com/notes/457398051261/",
            image: "images/kwongwah.jpg",
          },
          {
            url: "https://binhong.me/images/skor_news.jpg",
            image: "images/berita_harian.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans|Oxygen");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.left-lining {
  border-left-width: 5px;
  border-left-style: solid;
  border-left-color: rgb(4, 180, 95);
  line-height: 25px;
  max-width: 965px;
  padding: 10px 20px 10px 20px;
  text-size-adjust: 150%;
}

.defaultboxes {
  font-family: "Oxygen";
  margin-left: auto;
  margin-right: auto;
  max-width: 1011px;
  padding-top: 25px;
  padding-bottom: 5px;
}

.date {
  display: inline-block;
  font-size: 15px;
  float: right;
  line-height: 25px;
  margin: 5px;
}

a {
  color: #026435;
}

a:hover,
a:focus {
  color: #0b486b;
}

h2 {
  font-family: "Fira Sans";
  font-weight: bold;
  font-size: 30px;
  letter-spacing: -0.5px;
  margin: 0px;
}
</style>
