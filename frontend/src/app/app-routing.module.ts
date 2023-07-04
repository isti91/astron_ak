import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NewcarComponent } from './component/newcar/newcar.component';
import { CarrentComponent } from './component/carrent/carrent.component';
import { MotorrentComponent } from './component/motorrent/motorrent.component';
import { TrailrentComponent } from './component/trailrent/trailrent.component';
import { MicrobusrentComponent } from './component/microbusrent/microbusrent.component';
import { LorryrentComponent } from './component/lorryrent/lorryrent.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'new-car', component: NewcarComponent },
    { path: 'car-rent', component: CarrentComponent },
    { path: 'motor-rent', component: MotorrentComponent },
    { path: 'trail-rent', component: TrailrentComponent },
    { path: 'microbus-rent', component: MicrobusrentComponent },
    { path: 'lorry-rent', component: LorryrentComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
