import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class UpdateService {

  constructor(updates: SwUpdate, private snackBar: MatSnackBar) {
    this.detectOffline();
    updates.versionUpdates.subscribe(evt => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
          break;
      }
    });
  }

  detectOffline() {
    window.addEventListener('DOMContentLoaded', () => {
      window.addEventListener('online',  ()=> this.toggleSnackbar(false));
      window.addEventListener('offline', () => this.toggleSnackbar(true));
    });
  }

  toggleSnackbar(showSnackbar: boolean) {
    if(showSnackbar) this.snackBar.open("Sei offline!", undefined,  {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    else this.snackBar.dismiss();
  }
}
