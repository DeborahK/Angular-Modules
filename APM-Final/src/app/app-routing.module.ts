import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './user/auth-guard.service';
import { SelectiveStrategy } from './selective-strategy.service';

import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent,
                children: [
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: 'welcome', component: WelcomeComponent },
                    {
                        path: 'products',
                        canActivate: [ AuthGuard ],
                        data: { preload: true },
                        loadChildren: 'app/products/product.module#ProductModule'
                    }
                ]
            },
            { path: 'products', redirectTo: 'home/products', pathMatch: 'full' },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ], { enableTracing: true, preloadingStrategy: SelectiveStrategy }) // , { enableTracing: true })
    ],
    providers: [ SelectiveStrategy ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
