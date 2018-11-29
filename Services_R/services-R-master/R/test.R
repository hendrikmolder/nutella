
#library('tidyr')
#library('dplyr')
#library('httpuv')

#test <- 'nama%2Cumur%2Ckebangsaan%0Ahapsoro%2C26%2Cindonesia%0Ashasa%2C20%2Cindonesia'
#criteria <- nama == 'hapsoro'
#uriDecoded <- URLdecode(test)
#parsedData <- read.delim(textConnection(uriDecoded), sep=',', strip.white = TRUE)
#dataset <- as.data.frame(parsedData)
#result  <- dplyr::filter(dataset, nama == 'hapsoro')

#xxx <- amelia(as.data.frame(temp %>% select(Site.ID, FullDate, Lane, Direction, Class.Name, Length..ft., Headway..s., Gap..s., Speed..mph.)), idvars = idVars)

#xx <- temp %>% sample_n(200)
#write.table(xx %>% select(Site.ID, FullDate, Lane, Direction, Class.Name, Length..ft., Headway..s., Gap..s., Speed..mph.), file='/Users/hapsorohap/Documents/file.csv', sep=',', quote = FALSE)
#yyy <- as.list(as.list(xxx$imputations))
