import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-online',
  standalone: true,
  imports: [],
  templateUrl: './radio-online.component.html',
  styleUrl: './radio-online.component.css'
})
export class RadioOnlineComponent {
  audioPlayer!: HTMLAudioElement | null;

  playPause(): void {
    if (this.audioPlayer) {
      if (this.audioPlayer.paused) {
        this.audioPlayer.play();
      } else {
        this.audioPlayer.pause();
      }
    }
  }

  stop(): void {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
    }
  }

}
