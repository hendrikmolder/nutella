library('tidyr')
library('dplyr')
library('utils')

not_implemented_string <- 'not implemented yet'

#' Add together two numbers
#'
#' @param x A dataset
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' curl http://localhost:12345/ocpu/library/mypackage/R/select/json -d "dataset=%22id%2Ctime%2CQ3.2.1.%2CQ3.2.2.%2CQ3.2.3.%2CQ3.3.1.%2CQ3.3.2.%2CQ3.3.3.%0A1%2C2009-01-01%2C-0.2059165%2C-0.29177677%2C-0.7107192%2C1.52718069%2C-0.4484351%2C-1.21550600%0A2%2C2009-01-02%2C-0.1981136%2C-1.19813815%2C1.1750200%2C-0.40380049%2C-1.8376094%2C1.03588482%0A3%2C2009-01-03%2C0.3514795%2C-0.27425539%2C1.1171712%2C-1.02641801%2C-2.0646661%2C-0.35353058%22&listCols=%22id%22"
#' curl http://localhost:12345/ocpu/library/mypackage/R/select/json -d "dataset=%22id%2Ctime%2CQ3.2.1.%2CQ3.2.2.%2CQ3.2.3.%2CQ3.3.1.%2CQ3.3.2.%2CQ3.3.3.%0A1%2C2009-01-01%2C-0.2059165%2C-0.29177677%2C-0.7107192%2C1.52718069%2C-0.4484351%2C-1.21550600%0A2%2C2009-01-02%2C-0.1981136%2C-1.19813815%2C1.1750200%2C-0.40380049%2C-1.8376094%2C1.03588482%0A3%2C2009-01-03%2C0.3514795%2C-0.27425539%2C1.1171712%2C-1.02641801%2C-2.0646661%2C-0.35353058%22&listCols=%22id%2Ctime%22"
select <- function(dataset, listCols) {
  result <- dplyr::select_(dataset, .dots = listCols)
  return(result)
}


#' filter dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' add(10, 1)
#' curl http://localhost:12345/ocpu/library/mypackage/R/filter/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%22&criteria=%22nama%3D%3D%27hapsoro%27%22"
filter <- function(dataset, criteria = NULL) {
  result  <- dplyr::filter_(dataset, .dots = criteria)
  return(result)
}

#' deduplicate dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' add(1, 1)
#' add(10, 1)
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/deduplicate/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoro%2C22%2Cinggris%22&criteria=%27%22kebangsaan%2Cnama%22%27"
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/deduplicate/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoro%2C22%2Cinggris%22&criteria=%27%22kebangsaan%2Cnama%22%27"
deduplicate <- function(dataset, criteria = NULL) {
  if(!is.null(criteria)) {
    result  <- dplyr::distinct_(dataset, criteria)
  }
  else {
    result <- dplyr::distinct_(dataset)
  }
  return(result)
}

#' slice dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/slice/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoro%2C22%2Cinggris%22&criteria=%272%3A3%27"
slice <- function(dataset, criteria = NULL) {
  result  <- dplyr::slice_(dataset, criteria)
  return(result)
}

#' sample dataset
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/sample/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoro%2C22%2Cinggris%22&n=2"
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/sample/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoro%2C22%2Cinggris%22&n=10&replace=TRUE"
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/sample/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoro%2C22%2Cinggris%22&n=2&replace=FALSE"
sample <- function(dataset, n, replace = FALSE) {
  result  <- dplyr::sample_n(dataset, n, replace = replace)
  return(result)
}


#' rename columns ## still error
#' inconsistent behaviour of dplyr::rename_ <- new column names could not be from a variable
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/rename/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoro%2C22%2Cinggris%22&n=2"
rename <- function(dataset, newName, oldName) {
  params = c()
  for(i in 1:length(leftColName)) {
    params <- append(params, setNames(oldName[[i]], newName[[i]]))
  }
  result  <- dplyr::rename_(dataset, .dots = params)
  return(result)
}

#' sort data
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/sort/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoro%2C22%2Cinggris%22&criteria=%22nama%22"
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/sort/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoro%2C22%2Cinggris%22&criteria=%22desc(nama)%22"
arrange <- function(dataset, criteria = NULL) {
  result  <- dplyr::arrange_(dataset, .dots = criteria)
  return(result)
}

#' spread data
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @return The sum of \code{x} and \code{y}
#' @examples
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/spread/json -d "dataset=%22nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia%0Aadi%2C26%2Cindonesia%0Ahapsoroxx%2C26%2Cinggris%22&key=%22umur%22&column=%22kebangsaan%22"
spread <- function(dataset, key, column) {
  result  <- tidyr::spread_(dataset, key, column)
  return(result)
}

#' gather data
#'
#' @param dataset comma-separated values dataset
#' @param y A number
#' @param gatherCols comma separated column name array
#' @return The sum of \code{x} and \code{y}
#' @examples
#' example call: curl http://localhost:12345/ocpu/library/mypackage/R/gather/json -d "dataset=%22id%2Ctime%2CQ3.2.1.%2CQ3.2.2.%2CQ3.2.3.%2CQ3.3.1.%2CQ3.3.2.%2CQ3.3.3.%0A1%2C2009-01-01%2C-0.2059165%2C-0.29177677%2C-0.7107192%2C1.52718069%2C-0.4484351%2C-1.21550600%0A2%2C2009-01-02%2C-0.1981136%2C-1.19813815%2C1.1750200%2C-0.40380049%2C-1.8376094%2C1.03588482%0A3%2C2009-01-03%2C0.3514795%2C-0.27425539%2C1.1171712%2C-1.02641801%2C-2.0646661%2C-0.35353058%22&key=%22id%22&newColName=%22Q%22&gatherCols=%22Q3.2.1.%2CQ3.2.2.%2CQ3.2.3.%2CQ3.3.1.%2CQ3.3.2.%2CQ3.3.3.%22"
gather <- function(dataset, key, newColName, gatherCols) {
  result  <- tidyr::gather_(dataset, key, newColName, gatherCols)
  return(result)
}

mutate <- function(dataset, expressions, colNames) {
  params = c()
  for(i in 1:length(expressions)) {
    params <- append(params, setNames(expressions[[i]], colNames[[i]]))
  }

  result <- dplyr::mutate_(dataset, .dots = params)
  return(result)
}

transmute <- function(dataset, expressions, colNames) {
  params = c()
  for(i in 1:length(expressions)) {
    params <- append(params, setNames(expressions[[i]], colNames[[i]]))
  }

  result <- dplyr::transmute_(dataset, .dots = params)
  return(result)
}
