import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { AppComponent } from "../app.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { ShoppingService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent
    ],

    imports: [
        SharedModule,
        AppRoutingModule
    ],

    exports :[
        AppRoutingModule,
        HeaderComponent
    ],
    providers : [ShoppingService, RecipeService, DataStorageService, AuthService]


})



export class CoreModule{}