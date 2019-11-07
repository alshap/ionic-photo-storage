# ionic-photo-storage

If you are not familiar with Ionic choose **Plain start**

## Quick start

Quick start is possible when node js, all sdks and needed components are already installed.
If something went wrong check **IonicAppHowTo.html**

1. Create a blank project
```
>ionic start PhotoStorage blank
```
2. Clone repository and replace repository files with your project files
```
>git clone https://github.com/alshap/ionic-photo-storage
```
3.Install packages via npm
```
>npm install
```
4. Add cordova resources
```
npm install -g cordova-res
```
5. Add platform
```
>ionic cordova platform add ios
>ionic cordova platform add android
```
6. Run project
```
>ionic cordova run android
>ionic cordova run ios
```
## Plain start

Documentation how to create project with all set ups is written in **IonicAppHowTo.html**. Open html file with any browser(in microsoft Edge it could appear incorrectly).

### <u>Создание гибридного мобильного приложения</u>

## Вступление

Мы рассмотрим создание гибридного мобильного приложения, используя Ionic и Cordova.  

Будут рассмотрены следующие аспекты:

*   Подготовка рабочей среды
*   Тестирование и отладка
*   Создание гибридного приложения с внедрением нативных функций

# Предпросмотр

Приложение, которое мы будем создавать представляет из себя базу данных SQLite для хранения фотографий,сделанных на камеру устройства.  
В ходе создания приложения мы рассмотрим внедрение нативной функции камеры, работу с базой данных SQLite, управление модальными окнами и окнами подтверждения, а так же возможностями ввода и вывода данных.

<details><summary>**Спойлер(приложение)**</summary>

<div>![](images/preview.jpg)</div>

</details>

## Подготовка рабочей среды

# Установка Node.js

Node.js - Программная платформа, основанная на движке V8\. Командная строка Node.js представляет собой универсальный инструмент для установки необходимых модулей, запуска и сборки приложений.  
[**Ссылка на установку**](https://nodejs.org)

# Установка IDE

Разрабатывать приложение можно, используя любой текстовый редактор, но рекоментуется использовать интегрированные среды разработки , так как они обеспечивают удобство и контроль ошибок.  
Одна из наиболее удобных IDE является Visual Studio Code.  
[**Ссылка на установку**](https://code.visualstudio.com/)

# Установка Ionic и Cordova

[Оффициальная документация](https://ionicframework.com/getting-started)

Установка Ionic и всех модулей, связанных с ним, происходит из командной строки Node.js.

<details><summary>**Спойлер(Как открыть Node.js command prompt)**</summary>

<div>![](images/nodefind.jpg)</div>

</details>

В открытой командной строке нужно прописать следующую команду для установки Ionic  

`npm install -g ionic`

И для Cordova

`npm install -g cordova`

## Тестирование и отладка

# Способы проверки приложения

Приложение можно тестировать тремя способами: В браузере, в эмуляторе, либо на реальном устройстве.

Ionic использует WebView для постройки приложений. Это означает, что работу приложения можно проверять в любом браузере(НО приложения, использующие Cordova, т.е. нативные функции не могут быть отлажены в браузере или на эмуляторе).

# Примеры запуска приложения

Первым делом создадим пустой проект Ionic.

`ionic start MyApp tabs`

И перейдем в корневую папку проекта

`cd app1`

Теперь мы можем запустить проект.

# Запуск в браузере

Следующая команда запустит локальный веб-сервер с нашим приложением.

`ionic serve`

Проверить работу приложения можно в браузере, введя **localhost:8100** в поле ввода для сайта(порт может меняться, более подробно будет написано в ходе выполнения команды serve)  
Приложение будет отлаживаться в реальном времени. Любые изменения в коде сразу отобразятся в браузере.

# Запуск на реальном устройстве.

Устройство должно быть подключено по USB и на устройстве должен быть включен режим разработчика.  
**Следующая команда покажет все видимые устройства и эмуляторы.**  

`adb devices`

Запуск на устройстве требует установки дополнительного ПО.(Java SDK, Android SDK и Gradle).  
[**Как установить Java SDK, Android SDK и Gradle**](https://ionicframework.com/docs/v3/developer-resources/platform-setup/windows-setup.html)  

Теперь все готово к запуску приложений. Следующие команды добавят возможность запуска на нужном устройстве.  
Android

`ionic cordova platform add android`

IOS

`ionic cordova platform add ios`

Теперь можно запускать приложение(убедитесь, что устройство подключено по usb и на нем включен режим разработчика)

`ionic cordova run [platform]`

Эта команда автоматически установит и запустит приложение на подключенном устройстве.  
Параметр **--livereload** позволит проверять изменения в коде в реальном времени, не вынуждая постоянно переустанавливать приложение

`ionic cordova run [platform] --livereload`

# Запуск на эмуляторе

Эмулятор удобнее всего создать с помощью Android Studio.  
[Как создать эмулятор Android](https://ionicframework.com/docs/installation/android)

***Следует помнить, что процессоры Intel и AMD поддерживают разные эмуляторы**

Следующая команда запустит проект на доступном эмуляторе

`ionic cordova emulate [platform]`

## Создание первого приложения

Создадим пустое приложение с встроенным боковым меню на фреймворке Angular

`ionic start PhotoStorage sidemenu`

Далее следует выбрать Angular и подождать генерацию приложения.

# Немного о том, что находится в сгенерированном проекте

*   Папка **node_modules** содержит все подключенные библиотеки к проекту
*   Файл **package.json** содержит версии всех используемых инструментов
*   Файл **config.xml** название и версию приложения(в Ionic 4 может отсутствовать по умолчанию до генерации Cordova. Для подключения можно ввести команду **ionic integrations enable cordova --add**
*   Папка **src** содержит весь исходный код приложения
    *   Папка **app** содержит все страницы приложения

# Генерация страниц

Для нашего приложения потребуется 4 страницы, 2 из которых будут модальными и 2 регулярными(главная страница, список фотографий, добавление фотографии и Предпросмотр фотографий). Регулярные страницы мы сгенерировали вместе с приложением. Принцип генерации модальных и регулярных страниц одинаковый.  
Для генерации страниц воспользуемся командой, находясь в папке проекта.  
Для генерации страницы просмотра фотографии.

`ionic generate page preview-modal`

Для генерации страницы создания фотографии.

`ionic generate page newrecord-modal`

Генерация страницы создает папку из 5 файлов. Нам потребуются только 3 из них.

*   **.html** для визуализации контента.
*   **.ts** для скриптов.
*   **.scss** для визуальных стилей.

Так же вместе с генерацией страниц в файле **/src/app/app-routing.module.ts** создаются пути в переменную **Routes** без которых навигация внутри приложения не будет работать.

Так как страницы модальные, их требуется добавить в файл **src/app/app.module.ts** в качестве импортируемых элементов.  
В начало файла

`import { NewrecordModalPageModule } from './newrecord-modal/newrecord-modal.module';``import { PreviewModalPageModule } from './preview-modal/preview-modal.module';`

И в переменную **imports** добавить **NewrecordModalPageModule, PreviewModalPageModule**

<details><summary>**Как это должно выглядить**</summary>

<div>![](images/importpagemodule.jpg)</div>

</details>

# Добавляем сервис SQLite

Создадим сервис и установим необходимые модули

<pre>

<div class="multicode">
  ionic g service services/database
  npm install @ionic-native/sqlite
  npm install @ionic-native/sqlite-porter
  ionic cordova plugin add cordova-sqlite-storage
  ionic cordova plugin add uk.co.workingedge.cordova.plugin.sqliteporter
        </div>

</pre>

В папке /src/assets создадим файл **photos.sql**  
Откроем **photos.sql** в текстовом редакторе и добавим в него строку  

<div class="multicode">CREATE TABLE IF NOT EXISTS photos(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT, description TEXT, img TEXT, date TEXT, time TEXT);</div>

И добавим импорт модулей в файл **/src/app/app.module.ts**  
В начало

<pre>

<div class="multicode">
  import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
  import { SQLite } from '@ionic-native/sqlite/ngx';
  import { HttpClientModule } from '@angular/common/http';
        </div>

</pre>

В **imports** модуль HttpClientModule и в **providers** модули SQLite, SQLitePorter

<details><summary>**Как это должно выглядить**</summary>

<div>![](images/importsqlmodule.jpg)</div>

</details>

Перейдем в **src/app/services/database.service.ts** и добавим функции базы данных

<details><summary>**Код database.service.ts**</summary>

<pre>

<div class="largecode">
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Photo {
  id: number,
  title: string,
  description: string,
  img: string
  date: string
  time: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject = new BehaviorSubject(false);

  photos = new BehaviorSubject([]);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter,
             private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'photos.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.checkTableCreation();
          this.seedDatabase();
      });
    });
  }

  seedDatabase() {
    this.http.get('assets/photos.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadPhotos();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getPhotos(): Observable {
    return this.photos.asObservable();
  }

  checkTableCreation(){
    return this.database.executeSql('CREATE TABLE IF NOT EXISTS photos(id INTEGER PRIMARY KEY AUTOINCREMENT,'+
                                    'title TEXT, description TEXT, img TEXT, date TEXT, time TEXT');
  }

  loadPhotos() {
    return this.database.executeSql('SELECT * FROM photos', []).then(data => {
      let photos: Photo[] = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {

          photos.push({ 
            id: data.rows.item(i).id,
            title: data.rows.item(i).title, 
            description: data.rows.item(i).description, 
            img: data.rows.item(i).img,
            date: data.rows.item(i).date,
            time: data.rows.item(i).time
           });
        }
      }
      this.photos.next(photos);
    });
  }

  addPhoto(title, description, img) {
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let data = [title, description, img, date, time];
    return this.database.executeSql('INSERT INTO photos (title, description, img, date, time)'+
                                    ' VALUES (?, ?, ?, ?, ?)', data).then(data => {
      this.loadPhotos();
    });
  }

  getPhoto(id): Promise {
    return this.database.executeSql('SELECT * FROM photos WHERE id = ?', [id]).then(data => {
    let i = 0
    return {
        id: data.rows.item(i).id,
        title: data.rows.item(i).title, 
        description: data.rows.item(i).description, 
        img: data.rows.item(i).img,
        date: data.rows.item(i).date,
        time: data.rows.item(i).time
      }
    });
  }

  deletePhoto(id) {
    return this.database.executeSql('DELETE FROM photos WHERE id = ?', [id]).then(_ => {
      this.loadPhotos();
    });
  }

  deletePhotos(){
    this.database.executeSql('DELETE FROM photos');
    this.database.executeSql('VACUUM photos');
    this.database.executeSql('UPDATE sqlite_sequence SET seq = 0 WHERE name = "photos"');
    return this.loadPhotos();

  }

}
</div>

</pre>

</details>

Теперь базу данных можно вызывать в любом месте программы.

# Добавляем функцию камеры и список фотографий

Импортируем модуль камеры и добавим его в **app.module.ts**

<pre>

<div class="multicode">
  ionic cordova plugin add cordova-plugin-camera
  npm install @ionic-native/camera
        </div>

</pre>

И в **app.module.ts** добавим

`import { Camera } from '@ionic-native/camera/ngx';`

В **providers** добавим **Camera**

Перейдем в файл **src/app/list/list.page.html** и изменим внешний вид страницы.

<details><summary>**Код list.page.html**</summary>

<pre>

<div class="largecode">
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>
      List
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-card class="list-height">
      <ion-list scroll="false">
        <ion-item *ngFor="let photo of photos; let i = index">
          <ion-icon name="trash" slot="start" (click)=deletePhoto(photo.id)></ion-icon>
            <ion-label (click)="openPreviewModal(i)"><h2>{{photo.title}}</h2></ion-label>
            <div class="item-id" slot="end">
            <p>ID: {{photo.id}}</p>
            <p>{{photo.date}}</p>
            </div>
        </ion-item>
      </ion-list>
</ion-card>
  <div class="button-centered">
    <ion-button (click)="erasePhotos()" horizontal="center">Erase list</ion-button>
  </div>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="openModal()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
</div>

</pre>

</details>

Пояснения к коду

*   **<ion-header>** - верхняя панель приложения
*   **<ion-content>** - внутренняя часть приложения
*   **<ion-list>** - визуализация коллекции данных
*   **<ion-button>** - стандартная кнопка
*   **<ion-fab>** - элемент в форме круга
*   **<ion-fab-button>** - кнопка в форме круга
*   **(click)** - функция, вызываемая при нажатии на область тега
*   ***ngFor** аттрибут ion-list, который принимает массив, итерируемый в **ion-item**

Перейдем в файл **list.page.ts** очистим класс **ListPage** и вставим следующий код

<details><summary>**Код list.page.ts**</summary>

<pre>

<div class="largecode">
import { Component, OnInit } from '@angular/core';
import { DatabaseService, Photo } from './../services/database.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';
import { NewrecordModalPage } from '../newrecord-modal/newrecord-modal.page'
import { PreviewModalPage } from '../preview-modal/preview-modal.page'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  photos: Photo[] = [];
  dataReturned: any;
  photo = {title: '',
           description: '',
           img: ''};

  constructor(private camera: Camera, private db: DatabaseService,
             public modalController: ModalController, public alertController: AlertController) {

  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      this.photo.img = 'data:image/jpeg;base64,' + imageData;
      this.addPhoto();
    }, (err) => {
      console.log("Camera issue:" + err);
    });
  }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getPhotos().subscribe(photos => {
          this.photos = photos;
        })
      }
    });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: NewrecordModalPage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((data) => {
     // if (data !== null) {
        const returnedData = data['data']
        this.photo.title = returnedData[0];
        this.photo.description = returnedData[1];
        this.takePicture();
      //}
    });
    return await modal.present();
  }

  async openPreviewModal(index: number) {
    let previewphoto = this.photos[index];
    const modal = await this.modalController.create({
      component: PreviewModalPage,
      componentProps: {
        "paramTitle": previewphoto['title'],
        "paramDescription": previewphoto['description'],
        "paramImg": previewphoto['img'],
        "paramDate": previewphoto['date'],
        "paramTime": previewphoto['time']

      }
    });
    return await modal.present();
  }

  addPhoto() {
    this.db.addPhoto(this.photo['title'], this.photo['description'], this.photo['img'])
    .then(_ => {
      this.photo = {title: '',
                    description: '',
                    img: ''};
    });
  }

  async deletePhoto(id){
    const alert = await this.alertController.create({
      header: 'Are you sure to delete photo?',
      message: 'This change can not be prevented',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.db.deletePhoto(id);
          }
        }
      ]
    });
    await alert.present();
  }

  async erasePhotos(){
    const alert = await this.alertController.create({
      header: 'Are you sure to erase database?',
      message: 'This change can not be prevented',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.db.deletePhotos();
          }
        }
      ]
    });
    await alert.present();
  }

}
  </div>

</pre>

</details>

Пояснение к функциям

*   **takePicture** запускает камеру устройства и позволяет сделать снимок, возвращая выходное изображение
*   **ngOnInit** функция по умолчанию, срабатывает при переходе на страницу
*   **openModal** открывает модальное окно для записи данных изображения
*   **openPreviewModal** открывает модальное окно для просмотра изображения
*   **addPhoto** добавляет фотографию в базу данных
*   **deletePhoto** удаляет фотографию из базы данных(с вызовом окна подтверждения)
*   **erasePhotos** очищает базу данных(с вызовом окна подтверждения)

Перейдем в файл **src/app/list/list.page.scss** и добавим немного визуальных стилей

<details><summary>**Код list.page.scss**</summary>

<pre>

<div class="largecode">
	.list-height{
		height: 70%;
		overflow-y: scroll;
	}
	.button-centered{
		text-align: center;
	}    
        </div>

</pre>

</details>

Пояснение к коду  
Мы создали 2 css класса. Первый для фиксированного отображения списка и второй для выравнивания кнопки по центру.

# Работаем с модальными окнами

**NewrecordModalPage**  
Перейдем в **/src/app/newrecord-modal** и добавим необходимый код в .html и .page.ts файлы

<details><summary>**Код example-modal.page.html**</summary>

<pre>

<div class="largecode">
<ion-header>
  <ion-toolbar text-center>
    <ion-title text-center>Add new picture</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-grid>
    <ion-row>
      <ion-label color="primary">
        <h2>Select Title and description for new photo</h2>
        </ion-label>
    </ion-row>
    <ion-row>
      <ion-col text-center>
        <ion-item>
          <div>
            <ion-label color="primary">Title</ion-label>
            <ion-input [(ngModel)]="modalTitle"></ion-input>
          </div>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col text-center>
        <ion-item>
          <div>
            <ion-label color="primary">Description</ion-label>
            <ion-textarea [(ngModel)]="modalDescription"></ion-textarea>
          </div>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col text-center>
        <ion-button (click)="closeModal()">Take Photo</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
      </div>

</pre>

</details>

Пояснение к коду

*   **ion-grid** табличный вид данных
*   **[(ngModel)]** переменная, передаваемая на страницу для визуализации

<details><summary>**Код newrecord-modal.page.ts**</summary>

<pre>

<div class="largecode">
  import { Component, OnInit } from '@angular/core';
  import { ModalController } from '@ionic/angular';

  @Component({
    selector: 'app-newrecord-modal',
    templateUrl: './newrecord-modal.page.html',
    styleUrls: ['./newrecord-modal.page.scss'],
  })
  export class NewrecordModalPage implements OnInit {

    modalTitle:string;
    modalDescription:string;
    modalPreview:string;

    constructor(
      private modalController: ModalController,
    ) { }

    ngOnInit() {
      this.modalTitle = "Title";
      this.modalDescription = "Description";
    }

    async closeModal() {
      let returned = [this.modalTitle, this.modalDescription];
      await this.modalController.dismiss(returned);
    }

  }  
      </div>

</pre>

</details>

Пояснение к коду

*   **closeModal** - функция, которая передает данные со страницы на управляющую страницу и вызывает блок modal.onDidDismiss()

Добавление и удаление фотографий готово. Осталось добавить контент для просмотра фотографии при нажатии на неё в списке.

**PreviewModalPage**

На страницу **preview-modal** передаются данные элемента из массива фотографий из **list.page.ts** и визуализируют его.

Перейдем в **/src/app/preview-modal**

<details><summary>**Код preview-modal.page.html**</summary>

<pre>

<div class="largecode">
<ion-header>
  <ion-toolbar>
    <ion-title>Photo view</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col text-center>
        <ion-item>
          <ion-row>
            <div>
              <ion-label color="primary">Title</ion-label>
              {{modalTitle}}
            </div>
          </ion-row>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col text-center>
        <ion-item>
          <div>
          <ion-textarea color="primary">Description</ion-textarea>
          {{modalDescription}}
        </div>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row>
        <ion-col text-center>
          <ion-item>
            <div>
            <ion-label color="primary">Date</ion-label>
            {{modalDate}}
          </div>
          </ion-item>
        </ion-col>
    </ion-row>
    <ion-row>
          <ion-col text-center>
            <ion-item>
              <div>
              <ion-label color="primary">Time</ion-label>
              {{modalTime}}
              </div>
            </ion-item>
          </ion-col>
        </ion-row>
    <ion-row>
      <ion-col text-center>
        <ion-item>
          <div>
            <ion-label color="primary">Preview</ion-label>
            <ion-img [src]="modalImg"></ion-img>
          </div>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col text-center>
        <ion-button (click)="closeModal()">Close</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
      </div>

</pre>

</details><details><summary>**Код preview-modal.page.ts**</summary>

<pre>

<div class="largecode">
  import { Component, OnInit } from '@angular/core';
  import { ModalController, NavParams } from '@ionic/angular';

  @Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.page.html',
  styleUrls: ['./preview-modal.page.scss'],
  })
  export class PreviewModalPage implements OnInit {

  modalTitle:string;
  modalDescription:string;
  modalImg:string;
  modalDate:string;
  modalTime:string;

  constructor(
  private modalController: ModalController,
  private navParams: NavParams
  ) { }

  ngOnInit() {
  console.table(this.navParams);
  this.modalTitle = this.navParams.data.paramTitle;
  this.modalDescription = this.navParams.data.paramDescription;
  this.modalImg = this.navParams.data.paramImg;
  this.modalDate = this.navParams.data.paramDate;
  this.modalTime = this.navParams.data.paramTime;
  }

  async closeModal() {
  await this.modalController.dismiss();
  }

  }
  </div>

</pre>

</details>

Теперь при нажатии на название фотографии в списке открывается модальное окно с просмотром фотографии.



