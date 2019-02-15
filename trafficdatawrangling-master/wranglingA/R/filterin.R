
filter_in <- function(x,y,z,o) {
  library(dplyr)
  data_1 <- read.csv(x)
  data_1 <- filter(data_1,grepl(z, data_1[[y]]))
  write.csv(data_1,file=o)
}
