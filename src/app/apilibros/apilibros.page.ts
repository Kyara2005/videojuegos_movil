import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonList, IonItem, IonInput, IonLabel, IonCard, IonCardContent,IonCardHeader, IonCardTitle, IonCardSubtitle, IonSpinner } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http'; // Importa HttpClientModule si necesitas hacer peticiones HTTP


@Component({
  selector: 'app-apilibros',
  templateUrl: './apilibros.page.html',
  styleUrls: ['./apilibros.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonList, IonItem, IonInput, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSpinner, CommonModule, FormsModule]
})
export class ApilibrosPage implements OnInit {

  textoBusqueda: string = ''; // Aquí puedes almacenar el texto de búsqueda ingresado por el usuario
  loading = false; // Variable para controlar el estado de carga
  libros: any[] = []; // Aquí almacenarás los libros obtenidos de la API

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.obtenerLibros();    
  }

  obtenerLibros() {
    const url =`https://openlibrary.org/search.json?q=${this.textoBusqueda}`
    this.http.get<any>(url)
    .subscribe(
      data => {
        console.log('Libro obtenido:', data); // Muestra los datos en la consola para verificar
        this.libros = data.docs; // Asigna los datos obtenidos a la variable libros ademas dentro del JSON la informacion se encuentra dentro de la propiedad docs
        this.loading = false; // Detén la animación de carga una vez que se obtienen los datos
      },
      error => {
        console.error('Error al obtener el libro:', error);
        this.loading = false; // Detén la animación de carga en caso de error
      }
    );
  }

}
