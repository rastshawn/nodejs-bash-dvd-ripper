#!/bin/bash
mkdir "/home/preznix/tv/$1"
mkdir "/home/preznix/tv/$1/Season $2"
mkdir "/home/preznix/tv/$1/Season $2/import"
makemkvcon --minlength=600 -r --decrypt --directio=true mkv disc:0 all "/home/preznix/tv/$1/Season $2/import";

cd "/home/preznix/tv"
./rename.sh $1 $2

curl -d '{"text" : "Your rip has finished.", "bot_id" : ""}' https://api.groupme.com/v3/bots/post

