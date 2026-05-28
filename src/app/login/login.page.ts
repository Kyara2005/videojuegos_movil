import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem,IonLabel,IonInput,IonButton,IonText,IonCard,IonCardContent } from '@ionic/angular/standalone';
import { SupabaseService } from '../services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem,IonLabel,IonInput,IonButton,IonText,IonCard,IonCardContent, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  email='';
  password='';
  mensaje='';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) { }

  async login() {
    const { error } = await this.supabaseService.login(
      this.email,
      this.password
    );

    if (error) {
      this.mensaje = 'Error al iniciar sesión';
    } else {
      this.router.navigate(['/tabs/tab1']);
    }
  }

  async register() {
    const { error } = await this.supabaseService.register(
      this.email,
      this.password
    );

    if (error) {
      this.mensaje = 'Error al registrarse';
    } else {
      this.mensaje = 'Revisa tu correo para confirmar el registro';
    }
  }

  ngOnInit() {
  }

}
