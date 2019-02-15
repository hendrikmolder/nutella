
filter_include <- function(input,output,colname,target) {
  library(dplyr)
  library(tidyr)
  library(stringr)
  data_1 <- read.csv(input)
  a <- str_split(target,",")
  a <- a[[1]]
  data_1 <- filter(data_1,data_1[[colname]] %in% a )
  write.csv(data_1,file=output)
  #filter_in("a.csv","b.csv","LaneNumber","1,2,3")
}
