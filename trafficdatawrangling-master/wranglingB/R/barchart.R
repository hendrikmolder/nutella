barchart <- function(input,output,col1,col2,wid,hei,wid2) {
  library(ggplot2)
  data_1 <- read.csv(input)
  #X = data_1[[col1]]
  #Y = data_1[[col2]]
  p <- ggplot(data_1,aes(x=get(col1),y=get(col2),group = 1))+ geom_bar(stat = "identity" , width = wid2)
  p <- p + xlab(col1)+ylab(col2)
  ggsave(p,file=output,width = wid,height = hei)
  #barchart("a.csv","abdcef.pdf","time","sum",10,2,0.5)
}
