filternotin <- function(input,output,colname,target) {
  library(stringr)
  data_1 <- read.csv(input)
  a <- str_split(target,",")
  a <- a[[1]]
  data_1 <- filter(data_1,!grepl(z, data_1[[y]]))
  #data_1 <- subset(data_1,select=-a)
  write.csv(data_1,file=output)
  #filter_in("g.csv","a.csv","day","2,9")
}
