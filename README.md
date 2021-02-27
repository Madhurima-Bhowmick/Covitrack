# Covitrack


## About

Covitrack is a simple COVID-19 tracker built using React-js. It uses an API to detect the active coronavirus cases, number of patients recovered and total deaths worldwide.
A graph is also plotted to depict the coronavirus stats on the basis of the country depicted in the World Map. Density of cases whether active, recovered or deaths are depicted using circular symbols on the map, which is different for countries respectively.


The "red" circle depicts the density of active Coronavirus cases of diiferent countries over the world. The "green" circle shows the total density of recovery in a country, whereas the "dark grey" circle depicts the number of deaths in that country. The list of countries shown in the dropdown menu gives estimate of the total number of cases registered so far. Line chart shows fluctuations over days, hover around to see exact figures. Clickable markers on the map show country stats along with the country flags respectively.



## API

Refer to disease.sh for the API.



## Scripts


Development starts by typing  ```create-react-app``` in the terminal, which requires node.js to be pre-installed. This will create a react application with the desired name.

To install all the required packages, go to the terminal and type,

```npm i```


To launch the application, go to the terminal and type,

```npm start```



###  Deployment

The Covitrack application is successfully deployed and authorized using Firebase CLI, which is a third-party OAuth application with read:user and repo sources.

###### The hosting URL is as

[https://covitrack-bf188.web.app](https://covitrack-bf188.web.app)




