# Pinterest Clone  

**View the app here**: https://master.d2a9ir0n1tzxtm.amplifyapp.com/  

**There is no need to create an account for the app. Just click the "Free Demo" button on the login screen, and you will be signed into the "demo" user profile, from which you can access all features of the application.**

Built with: React, Redux, React Router, Express, MongoDB, and SASS  

I built this application with the intention of making it nearly visually identical to pinterest.com while copying none of their code and, instead, using my own code and the tools I wanted.  

This is essentially a React/Redux/React Router app on the front-end, with an ExpressJS server and MongoDB database. Data for the app is stored in two places: mLab and Imgur. Everything besides the images is kept on mLab (users, posts, pins, and topics). All images are stored on Imgur using their API. The app's server-side code is deployed through Heroku.  

Using the app is pretty self-explanatory. Create pins, save them to boards, view others' pins, and so on.  

This github repo doesn't contain the server-side code. View that here: https://github.com/tensquare2443/pin-cl-s