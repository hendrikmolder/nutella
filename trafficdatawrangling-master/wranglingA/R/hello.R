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

filter_is <- function(x,y,z,o) {
  library(dplyr)
  data_1 <- read.csv(x)
  data_1 <- filter(data_1,data_1[[y]]==z)
  write.csv(data_1,file=o)
}
