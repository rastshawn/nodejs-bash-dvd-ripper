# nodejs-bash-dvd-ripper

# Why would anyone combine GroupMe and Bash scripts? 
I have a headless decade-old prebuilt desktop from acting as a web server and media server.
It also happens to be the only computer in my house with a disk drive, which makes watching DVDs a pain.
I decided that Plex, a self-hosted media server application, might be the answer to that - but even then, ripping 
DVDs on a headless machine was challenging. 

So given that reading a disk takes a while, so I'd like notifications, and I needed to somehow input the titles
into the DVD ripper. So GroupMe was that solution. 


# How?

This works by running a GroupMe bot in NodeJS. Whenever a message is sent to the bot
it runs a command-line based DVD ripper called MakeMKV, and then renames and reorganizes the 
episodes in a way that Plex can understand. For multi-disc seasons, 
it correctly numbers episodes. For example, if the first disc of a season has 6 episodes, the first 
title on the second disc will be numbered 7. The bot accepts messages in the following format:

startCopy [show_title] [7]

# Installation

npm install

chmod +x *.sh

Then, in both serverControl.js and copy.sh, add your nodejs bot ID
Then in serverControl.js specify the port on which this will run. 

# Running
nodejs serverControl.js
