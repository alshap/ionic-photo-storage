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
