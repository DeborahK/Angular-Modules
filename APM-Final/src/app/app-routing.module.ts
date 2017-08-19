import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './user/auth-guard.service';
import { SelectiveStrategy } from './selective-strategy.service';

import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: ShellComponent,
                children: [
                    { path: 'welcome', component: WelcomeComponent },
                    {
                        path: 'products',
                        canActivate: [AuthGuard],
                        data: { preload: true },
                        loadChildren: 'app/products/product.module#ProductModule'
                    },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                ]
            },
            { path: '**', component: PageNotFoundComponent }
        ], { preloadingStrategy: SelectiveStrategy }) // , { enableTracing: true })
    ],
    providers: [SelectiveStrategy],
    exports: [RouterModule]
})
export class AppRoutingModule { }
