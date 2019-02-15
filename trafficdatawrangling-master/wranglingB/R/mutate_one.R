# Hello, world!
#
# This is an example function named 'hello'
# which prints 'Hello, world!'.
#
# You can learn more about package authoring with RStudio at:
#
#   http://r-pkgs.had.co.nz/
#
# Some useful keyboard shortcuts for package authoring:
#
#   Build and Reload Package:  'Ctrl + Shift + B'
#   Check Package:             'Ctrl + Shift + E'
#   Test Package:              'Ctrl + Shift + T'

mutate_one <- function(input,output,colna,expre) {
  library(dplyr)
  library(tidyr)
  data_1 <- read.csv(input)
  data_1 <- mutate(data_1, colname = eval(parse(text = expre)))
  names(data_1)[names(data_1)=="colname"]=colna
    write.csv(data_1,output)
    #hello ("g.csv","a.csv","JC","AvgSpeed/3.01")
}
