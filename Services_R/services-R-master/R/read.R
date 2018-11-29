read.fromURL <- function(datasourceURL, paramNames, paramVals) {
  library(httr)

  contentData <- list()
  for(i in 1:length(paramNames)) {
    contentData[paramNames[[i]]] <- paramVals[[i]]
  }

  res <- POST(datasourceURL, body = contentData, encode = "form", verbose())
  result <- content(res, "parsed")

  return(result)
}

