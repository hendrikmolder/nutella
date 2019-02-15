deleteNA <- function(x,o)
{
  data_1 <- read.csv(x)
  data_1 <-data_1[!complete.cases(data_1), ]
  write.csv(data_1,o)
}
