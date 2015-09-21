# my-contest-theme - Read Me
#Sencha-Application-Theming-Contest

#Unzip the downloaded folder into your hard drive
#Build the Feed Viewer sample application

cd theming-contest-master

#delete directory .sencha/workspace (to use theming-workspace)

sencha app build development

#Start web server and watch changes
#For feedviewer app using classic toolkit, run

sencha app watch classic

http://localhost:1841/theming-contest-master/?platformTags=fashion:true

#For modern please use 

http://localhost:1841/theming-contest-master/?platformTags=fashion:false
