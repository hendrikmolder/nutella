select_notin <- function(x,y,o) {
  library(dplyr)
  library(tidyr)
  data_1 <- read.csv(x)
  data_1 <- select(data_1,-contains(y))
  write.csv(data_1,file=o)
}
