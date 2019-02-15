separate_two <- function(input,output,oldcol,newcol1,newcol2,symb) {
  library(dplyr)
  library(tidyr)
  data_1 <- read.csv(input)
  data_1 <- separate(data_1,oldcol,c(newcol1,newcol2), sep=symb)
  write.csv(data_1,file=output)
  #separate_two("a.csv","b.csv","date","day","month","/")
}
