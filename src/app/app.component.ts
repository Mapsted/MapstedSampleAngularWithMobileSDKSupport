import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapstedAwesomeCordovaPlugin } from 'mapsted-awesome-cordova-plugin/ngx';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'matsted-cordova';
  constructor(private mapsted: MapstedAwesomeCordovaPlugin) {}

  async launchMap(){
    try {
      console.log("call launchMap");
      await this.mapsted.launchMapActivity();
    } catch (error) {
        console.error('Error launching map:', error);
        // Optionally, notify the user about the error
    }
  }
}
