import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import des modules pour la traduction
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
// Import des composants propre au login
import { LoginComponent } from './login.component';
import { LoginFormComponent } from '../../_shared/login-form/login-form.component';
// Import des modules pour material design
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatIconModule } from '@angular/material';
// Import pour la gestion des formulaires
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Import du composant pour afficher le logo
import { LogoComponent } from '../../_shared/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LogoComponent
  ]
})
export class LoginModule { }
