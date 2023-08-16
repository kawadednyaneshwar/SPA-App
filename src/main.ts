import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AboutModule } from './app/about/about.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
