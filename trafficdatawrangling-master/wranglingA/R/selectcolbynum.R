select_num <- function(x,n,o) {
  library(dplyr)
  library(tidyr)
  data_1 <- read.csv(x)
  data_1 <- select(data_1,n)
  write.csv(data_1,file=o)
}
