rm(list=ls())

library(tidyverse)

datadir <- 'C:/Users/dhardy/Dropbox/r_data/gars'

df <- read_csv(file.path(datadir, 'flint-profile.csv')) %>%
  rename(dist_m = X, elev_m = 'Feature Profile 1', index = Index) %>%
  mutate(dist_mi = dist_m * 0.000621371, elev_ft = elev_m * 3.28084) %>%
  mutate(point = ifelse(index == 13005, 13,
                        ifelse(index == 18719, 18,
                        ifelse(index == 26445, 25, 
                               ifelse(index == 30935, 29,
                                      ifelse(index == 42229, 40, 
                                             ifelse(index == 55222, 50,
                                                    ifelse(index == 64211, 60, 'na'))))))))

ggplot(df, aes(dist_mi, elev_ft)) + 
  geom_line() + 
  geom_point(aes(dist_mi, elev_ft), filter(df, point != 'na')) +
  geom_text(aes(label = point), hjust = 0, vjust = -0.5, filter(df, point != 'na')) +
  scale_y_continuous(name = 'Elevation (ft)') + 
  scale_x_continuous(name = 'River Miles') +
  theme_bw() + 
  ggtitle('Flint River Profile')
