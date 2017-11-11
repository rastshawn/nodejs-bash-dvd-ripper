#!/bin/bash

DIR="/home/preznix/tv/$1/Season $2"
cd "$DIR"

COUNT=0;

for i in *.mkv ;
    do let "COUNT+=1" 
done

cd "import"

for i in *.mkv ; 
    do mv "$i" "../$1 - s$2e$COUNT.mkv" 
    let "COUNT+=1"
done

rmdir "$DIR/import"
