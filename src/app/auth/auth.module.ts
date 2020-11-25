import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { authFeatureKey, authReducer } from "./auth.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
  ],
})
export class AuthModule {}
