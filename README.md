# Covitrack


## About

Covitrack is a simple COVID-19 tracker built using React-js. It uses an API to detect the active coronavirus cases, number of patients recovered and total deaths worldwide.
A graph is also plotted to depict the coronavirus stats on the basis of the country depicted in the World Map. Density of cases whether active, recovered or deaths are depicted using circular symbols on the map, which is different for countries respectively.


The "red" circle depicts the density of active Coronavirus cases of diiferent countries over the world. The "green" circle shows the total density of recovery in a country, whereas the "dark grey" circle depicts the number of deaths in that country. The list of countries shown in the dropdown menu gives estimate of the total number of cases registered so far. On the left-hand side, there is a list of countries which shows the total coronavirus cases worldwide arranged in ascending order. Line chart shows fluctuations over days, where you can hover around to see exact figures. Clickable markers on the map show country stats along with the country flags respectively.


Covitrack application keeps you updated about the current coronavirus statistics, different for different countries respectively. The graph changes accordingly, depending upon the density of cases globally.


## API

Refer to [disease.sh](disease.sh) for the API.



## Scripts


Development starts by typing    ```create-react-app```   in the terminal, which requires node.js to be pre-installed. This will create a react application with the desired name.

To install all the required packages, go to the terminal and type,

```npm i```


To launch the application, go to the terminal and type,

```npm start```



###  Deployment

The Covitrack application is successfully deployed and authorized using Firebase CLI, which is a third-party OAuth application with read:user and repo sources.

To deploy the Covitrack application, run   ```npm run build```   in the terminal. After successful production build, run   ```firebase deploy```  . This will finally deploy the application globally.

#### The hosting URL is as :

[https://covitrack-bf188.web.app](https://covitrack-bf188.web.app)



#### An overview of the Covitrack Application :




![Covitrack](https://user-images.githubusercontent.com/76059423/109393488-ff6e7500-7947-11eb-99a1-3d3a2d97341b.png)







