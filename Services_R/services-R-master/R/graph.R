#' graph
#'


bar_chart <- function(data, x_axis, y_axis, group_col,
                      title = '',
                      legend = group_col, x_legend = x_axis, y_legend = y_axis) {
  library(ggplot2)
  result <- ggplot(data=data, aes_string(x= x_axis, y = y_axis, fill=group_col )) +
    geom_bar(colour="black", stat="identity",
             position=position_dodge(),
             size=.3) +               
    scale_fill_hue(name= legend) +    # Set legend title
    xlab(x_legend) + ylab(y_legend) + # Set axis labels
    ggtitle(title) +                  # Set title
    theme_bw()

  return(result)
}


line_chart <- function(data, x_axis, y_axis, group_col,
                       title = '',
                       legend = group_col, x_legend = x_axis, y_legend = y_axis){
  library(ggplot2)
  result <- ggplot(data = data, aes_string(x = x_axis, y = y_axis, group= group_col, colour = group_col)) +
    geom_line() +                        
    geom_point() +
    scale_fill_hue(name = legend) +      # Set legend title
    xlab(x_legend) + ylab(y_legend) +    # Set axis labels
    ggtitle(title) +                     # Set title
    theme_bw()

  return(result)
}

boxplot <- function(data, x_axis, y_axis,
                    title = '', x_legend = x_axis, y_legend = y_axis){
  library(ggplot2)
  result <- ggplot(data = data, aes_string(x = x_axis, y = y_axis)) +
    geom_boxplot() +
    xlab(x_legend) + ylab(y_legend) +    # Set axis labels
    ggtitle(title) +                     # Set title
    theme_bw()
  
  return(result)
}