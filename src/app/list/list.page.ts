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
