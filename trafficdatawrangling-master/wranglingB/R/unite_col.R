unite_col <- function(input,output,colname,target,sepsign) {
  library(dplyr)
  library(tidyr)
  library(stringr)
  data_1 <- read.csv(input)
  a <- str_split(target,",")
  a <- a[[1]]
  data_1 <- unite(data_1,colname,a,sep = sepsign)
  names(data_1)[names(data_1)=="colname"]=colname
  write.csv(data_1,output)
  #unite_col("g.csv","a.csv","date","year,month,day","/")
}
