#!/bin/bash

# fail on first error
set -e
# show what is being run
set -x

#sanity check on arguments
if [ $# -lt 2 ] ; then
    echo " requires two arguments. <input-file> <output-file>";
    exit 1
fi

input1=$1
output1=$2
#filepath=$(cd "$(dirname "$1")"; pwd)
#filepath="$filepath"'/'$input  
# copy the input file from where the R script generates it to /home/qh 
# execute the command
/usr/bin/curl http://192.168.42.114/ocpu/library/wranglingB/R/linechart -d "input='/home/qh/opencputmp/$input1'&output='/home/qh/opencputmp/$output1'&col1='time'&col2='sum'&wid=30&hei=5"
     
# copy the output file to  ./ from where the R script generates it
cp /home/qh/opencputmp/$output1 ./$output1
