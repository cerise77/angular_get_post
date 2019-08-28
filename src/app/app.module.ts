import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ListComponent } from './list.component';
import { ProfilComponent } from './profil.component';
import { NotFoundComponent }   from './not-found.component';

import { AboutComponent } from './about.component';

import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes =[
    { path: '', component: LoginComponent},
    { path: 'list', component: ListComponent},
    { path: 'profil', component: ProfilComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [AppComponent, LoginComponent, ListComponent, ProfilComponent, AboutComponent, NotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
