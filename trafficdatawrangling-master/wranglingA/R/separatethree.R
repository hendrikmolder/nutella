separate_three <- function(input,output,oldcol,newcol1,newcol2,newcol3,symb) {
  library(dplyr)
  library(tidyr)
  data_1 <- read.csv(input)
  data_1 <- separate(data_1,oldcol,c(newcol1,newcol2,newcol3), sep=symb)
  write.csv(data_1,file=output)
  #separate_three("a.csv","b.csv","date","day","month","year","/")
}
