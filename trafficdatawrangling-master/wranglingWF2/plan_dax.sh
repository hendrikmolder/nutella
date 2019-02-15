#!/bin/bash

DIR=$(cd $(dirname $0) && pwd)

if [ $# -ne 1 ]; then
    echo "Usage: $0 DAXFILE"
    exit 1
fi

DAXFILE=$1

# This command tells Pegasus to plan the workflow contained in 
# dax file passed as an argument. The planned workflow will be stored
# in the "submit" directory. The execution # site is "".
# --input-dir tells Pegasus where to find workflow input files.
# --output-dir tells Pegasus where to place workflow output files.
   # --input-dir $DIR/input \
pegasus-plan --conf pegasus.properties \
    --dax $DAXFILE \
    --dir $DIR/submit \
    --output-dir /home/qh/output \
    --cleanup leaf \
    --force \
    --sites condorpool \
    --submit
