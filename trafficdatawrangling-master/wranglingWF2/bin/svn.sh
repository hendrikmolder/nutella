#!/bin/bash

# fail on first error
set -e
# show what is being run
set -x

#sanity check on arguments
if [ $# -lt 1 ] ; then
    echo "requires one arguments. <output-file>";
    exit 1
fi

output1=$1
#filepath=$(cd "$(dirname "$1")"; pwd)
#filepath="$filepath"'/'$input  
# copy the input file from where the R script generates it to /home/qh
#cp  ./$input /home/qh/opencputmp/$input
# execute the command
svn checkout https://github.com/qwqaijingjing/test/trunk/tmp
     
# copy the output file to  ./ from where the R script generates it
cp ./tmp/$output1 ./$output1
