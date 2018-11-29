#' aggregate

group_by <- function(data, colNames) {
  library('dplyr')
  result <- group_by_(data, .dots = colNames)
  return(result)
}

summarise <- function(data, expressions, newColNames) {
  library('dplyr')
  params = c()
  for(i in 1:length(expressions)) {
    params <- append(params, setNames(expressions[[i]], newColNames[[i]]))
  }
  result <- data %>% summarise_(.dots = params)
  return(result)
}
