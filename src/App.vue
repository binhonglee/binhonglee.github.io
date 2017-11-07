<template>
  <div id="app">
    <infobox/>
    <bulletedtextbox :items="education"/>
    <bulletedtextbox :items="experiences"/>
    <bulletedtextbox :items="community"/>
  </div>
</template>

<script>
import infobox from './components/Infobox'
import bulletedtextbox from './components/BulletedTextBox'
export default {
  name: 'app',
  components: {
    infobox,
    bulletedtextbox
  },
  data () {
    return {
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
            primary: 'American Degree Transfer Program (Applied Science)',
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
            primary: 'Founding Software Engineer',
            secondary: 'Humanity X Technologies LLC',
            date: 'September 2014 - January 2017',
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
      community: {
        name: 'Community',
        things: [
          {
            primary: 'Workshop leader',
            secondary: 'Hacks for Humanity 2017',
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
            primary: 'Writer',
            secondary: '#yesphx',
            date: 'January 2017'
          },
          {
            primary: 'Robot Design Judge',
            secondary: 'FIRST LEGO League - Arizona State Championship',
            date: 'January 2017'
          },
          {
            primary: 'Shaper',
            secondary: 'Global Shapers Community, George Town Hub',
            date: 'March 2014 - August 2014'
          }
        ]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
