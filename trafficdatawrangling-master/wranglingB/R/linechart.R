linechart <- function(input,output,col1,col2,wid,hei) {
  library(ggplot2)
  data_1 <- read.csv(input)
  p <- ggplot(data_1,aes(x=data_1[[col1]],y=data_1[[col2]], group = 1))+ geom_line()
  p <- p + xlab(col1)+ylab(col2)
  ggsave(p,file=output,width = wid,height = hei)

}
