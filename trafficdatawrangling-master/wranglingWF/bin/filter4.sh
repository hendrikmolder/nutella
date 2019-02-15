#!/bin/bash

# fail on first error
set -e
# show what is being run
set -x

#sanity check on arguments
if [ $# -lt 2 ] ; then
    echo "curl_wrapper requires two arguments. <input-file> <output-file>";
    exit 1
fi

input1=$1
output1=$2
filepath=$(cd "$(dirname "$1")"; pwd)
filepath="$filepath"'/'$input  
# copy the input file from where the R script generates it to /home/qh 
# execute the command
/usr/bin/curl http://192.168.42.114/ocpu/library/wranglingA/R/filter_include -d "input='/home/qh/opencputmp/$input1'&output='/home/qh/opencputmp/$output1'&colname='day'&target='2,9,16,23'"
     
# copy the output file to  ./ from where the R script generates it
cp /home/qh/opencputmp/$output1 ./$output1
