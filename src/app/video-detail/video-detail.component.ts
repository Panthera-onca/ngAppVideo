import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  private editTitle: boolean = false;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
  video!: string | symbol;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChange(){
    this.editTitle = false;
  }
  onTitleClick(){
    this.editTitle = true;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo(){
    this.deleteVideoEvent.emit(this.video);
  }

}
