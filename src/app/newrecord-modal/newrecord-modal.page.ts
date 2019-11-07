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
