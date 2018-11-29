
#' filter dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' add(10, 1)
#' iLeft and iRight are the indexes of dataset regarded as outliers
outliers <- function(dataset,colName) {
  dataset <- .parse(dataset)
  dataset <- dataset[[colName]]
  result <- extremevalues::getOutliers(dataset)
  return(result)
}


checkMissing <- function(dataset, colName) {
  return('not implemented yet')
}
