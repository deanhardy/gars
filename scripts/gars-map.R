rm(list=ls())

library(leaflet)
library(leaflet.extras)
library(sf)

datadir <- 'C:/Users/dhardy/Dropbox/r_data/gars'
  
df <- read_sf(file.path(datadir, 'gars-sites')) %>%
  st_transform(4326)

m <- leaflet() %>%
  addProviderTiles(providers$Esri.WorldImagery, group = 'ESRI World Imagery') %>%
  #addProviderTiles(providers$) %>%
  addTiles(group = 'Open Street Map') %>%
  setView(lng = -83, lat = 32.8, zoom = 7) %>%
  addScaleBar('bottomright') %>%
  addMarkers(data = df, group = 'GARS Sites',
             popup = paste('Site:', df$site, '<br>',
                           'River:', df$river, '<br>',
                           'Year Surveyed:', df$year, '<br>',
                           'Notes:', df$notes)) %>%
  addSearchOSM(options = searchOptions(autoCollapse = TRUE, minLength = 2)) %>%
  addLayersControl(baseGroups = c('Open Street Map', 'Esri World Imagery'), 
                   overlayGroups = c('GARS Sites'),
                   options = layersControlOptions(collapsed = TRUE))
m

## exporting as html file for exploration
library(htmlwidgets)
saveWidget(m, 
           file="/r_projects/gars/docs/gars.html",
           title = "Georgia River Survey, Full Survey Sites")
