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
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
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
 
  getPhotos(): Observable<Photo[]> {
    return this.photos.asObservable();
  }

  checkTableCreation(){
    return this.database.executeSql('CREATE TABLE IF NOT EXISTS photos'+
                                    '(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT, description TEXT, img TEXT, date TEXT, time TEXT');
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
                                    'VALUES (?, ?, ?, ?, ?)', data).then(data => {
      this.loadPhotos();
    });
  }
 
  getPhoto(id): Promise<Photo> {
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
