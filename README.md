#Avito-Safedeal

Задеплоенный проект: https://avito-safedeal.kbobrovjr.now.sh/

##Задание
Необходимо сверстать адаптивную страницу со списком фотографий.​

При клике на фотографии открывается модальное окно с фотографией, списком комментариев и формой добавления комментариев.​

Список ручек:

* GET ```https://boiling-refuge-66454.herokuapp.com/images``` - получение списка фотографий.
* GET ```https://boiling-refuge-66454.herokuapp.com/images/:imageId``` - получения большого изображения и списка комментариев.
* POST ```https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments``` - добавление комментария (204 – OK, комментарий не сохраняется).

Запуск сервера в dev режиме: ```npm start```
Запуск сервера в production режиме: ```npm run build```

Используемые техгологии: ```React```, ```Typescript```, ```Mobx```, ```react-router```, ```styled-components```, ```moment```.


### Пример работы

![](http://g.recordit.co/3T9ctj7eaU.gif)