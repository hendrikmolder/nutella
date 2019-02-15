select_notin <- function(input,output,colna) {
  library(dplyr)
  library(tidyr)
  library(stringr)
  data_1 <- read.csv(input)
  a <- str_split(colna,",")
  a <- a[[1]]
  data_1 <- select(data_1, -a)
  write.csv(data_1,output)
  #select_notin("g.csv","a.csv","Class1Volume,Class3Volume,Class4Volume,Class5Volume,Class6Volume")
}
