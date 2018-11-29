#' join
#'




#' left join dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' add(10, 1)
#' iLeft and iRight are the indexes of dataset regarded as outliers
leftJoin <- function(leftDataset, rightDataset, leftColName, rightColName) {
  params = c()
  for(i in 1:length(leftColName)) {
    params <- append(params, setNames(rightColName[[i]], leftColName[[i]]))
  }
  result <- dplyr::left_join(leftDataset, rightDataset, by=params)
  return(result)
}

#' right join dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' add(10, 1)
#' iLeft and iRight are the indexes of dataset regarded as outliers
rightJoin <- function(leftDataset,rightDataset, leftColName, rightColName) {
  params = c()
  for(i in 1:length(leftColName)) {
    params <- append(params, setNames(rightColName[[i]], leftColName[[i]]))
  }
  result <- dplyr::right_join(leftDataset, rightDataset, by=params)
  return(result)
}

#' inner join dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' add(10, 1)
#' iLeft and iRight are the indexes of dataset regarded as outliers
innerJoin <- function(leftDataset,rightDataset, leftColName, rightColName) {
  params = c()
  for(i in 1:length(leftColName)) {
    params <- append(params, setNames(rightColName[[i]], leftColName[[i]]))
  }
  result <- dplyr::inner_join(leftDataset, rightDataset, by=params)
  return(result)
}

#' outer join dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' add(10, 1)
#' iLeft and iRight are the indexes of dataset regarded as outliers
outerJoin <- function(leftDataset,rightDataset, leftColName, rightColName) {
  params = c()
  for(i in 1:length(leftColName)) {
    params <- append(params, setNames(rightColName[[i]], leftColName[[i]]))
  }
  result <- dplyr::outer_join(leftDataset, rightDataset, by=params)
  return(result)
}

#' semi join dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' add(10, 1)
#' iLeft and iRight are the indexes of dataset regarded as outliers
semiJoin <- function(leftDataset,rightDataset, leftColName, rightColName) {
  params = c()
  for(i in 1:length(leftColName)) {
    params <- append(params, setNames(rightColName[[i]], leftColName[[i]]))
  }
  result <- dplyr::semi_join(leftDataset, rightDataset, by=params)
  return(result)
}

#' anti join dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' add(10, 1)
#' iLeft and iRight are the indexes of dataset regarded as outliers
antiJoin <- function(leftDataset,rightDataset, leftColName, rightColName) {
  params = c()
  for(i in 1:length(leftColName)) {
    params <- append(params, setNames(rightColName[[i]], leftColName[[i]]))
  }
  result <- dplyr::anti_join(leftDataset, rightDataset, by=params)
  return(result)
}
