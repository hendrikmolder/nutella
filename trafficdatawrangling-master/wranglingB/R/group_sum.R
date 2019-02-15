group_sum <- function(input,output,groupby) {
  library(dplyr)
  library(tidyr)
  data_1 <- read.csv(input)
  traffic_data_sum <- data_1 %>% group_by(data_1[[groupby]]) %>% summarise(sum=sum(sum, na.rm = TRUE)) %>% ungroup()
  names(traffic_data_sum)[names(traffic_data_sum)=="data_1[[groupby]]"]=groupby
  write.csv(traffic_data_sum,output)
}
