#library(opencpu)
#library(devtools)
#install_github("appdemo", "opencpu")
#opencpu$browse("/library/mypackage/R")
#opencpu$stop()
#opencpu$start(12345)
#opencpu$stop()
## http://localhost:12345/ocpu/library/mypackage/R/squareroot/print

#library(devtools)
#install_github("tvscore", "opencpu")

library(opencpu)
opencpu$stop()
opencpu$start(12345)
