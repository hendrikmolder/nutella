
filter_weekdays <- function(input,colname,target) {
  library(dplyr)
  library(tidyr)
  library(stringr)
  library(mefa4)
  data_1 <- input
  a <- str_split(target,",")
  a <- a[[1]]
  data_1 <- filter(data_1,weekdays(as.POSIXlt(data_1[[colname]])) %in% a )

  return(data_1)

}


