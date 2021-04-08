import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    { path: '', component: Comment },
    { path: '**', pathMatch: 'full', redirectTo:'' },
    
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
