deletecol <- function(x,y,o) {
  data_1 <- read.csv(x)
  data_1 <- data_1[,-y]
  write.csv(data_1,file=o)
}
