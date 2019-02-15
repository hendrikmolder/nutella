#!/bin/bash

# fail on first error
set -e
# show what is being run
set -x

#sanity check on arguments
if [ $# -lt 2 ] ; then
    echo "requires two arguments. <input-file> <output-file>";
    exit 1
fi

input=$1
output=$2 
# copy the input file from where the R script generates it to /home/qh
cp ./$input /home/qh/opencputmp/$input
# execute the command
/usr/bin/curl http://192.168.42.114/ocpu/library/wranglingB/R/select_notin -d "input='/home/qh/opencputmp/$input'&output='/home/qh/opencputmp/$output'&colna='Class1Volume,Class3Volume,Class4Volume,Class5Volume,Class6Volume'"
     
# copy the output file to  ./ from where the R script generates it
cp /home/qh/opencputmp/$output ./$output
