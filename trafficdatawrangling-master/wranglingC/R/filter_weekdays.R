filter_weekdays <- function(input,output,colname,target) {
  library(dplyr)
  library(tidyr)
  library(stringr)
  library(mefa4)
  data_1 <- read.csv(input)
  a <- str_split(target,",")
  a <- a[[1]]
  data_1 <- filter(data_1,weekdays(as.POSIXlt(data_1[[colname]])) %in% a )
  write.csv(data_1,file=output)
  #filter_in("g.csv","a.csv","day","2,9")
}
