select_nums <- function(x,n,m,o) {
  library(dplyr)
  library(tidyr)
  data_1 <- read.csv(x)
  data_1 <- select(data_1,n:m)
  write.csv(data_1,file=o)
}
