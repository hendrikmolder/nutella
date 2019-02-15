group_time_sum <- function(input,output) {
  library(dplyr)
  library(tidyr)
  data_1 <- read.csv(input)
  traffic_data_sum <- data_1 %>% group_by(year,month,day,time) %>% summarise(sum=sum(Volume, na.rm = TRUE)) %>% ungroup()
  write.csv(traffic_data_sum,output)
  #hello ("g.csv","a.csv","JC","AvgSpeed/3.01")
}
