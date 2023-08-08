import { StickyDirection } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { ComunicationService } from 'src/app/services/comunication.service';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})


export class HotelesComponent implements OnInit{
  correoUser !: string;
  HOTEL_DISPLAY_DATA: HotelDisplay[] = [];
  allHotels: Hotel[] = [];
  constructor(
    private service: HotelServiceService,
    private comunicacion: ComunicationService,
    private router: Router,
    private route : ActivatedRoute
  ) {
    this.getAllHotels();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.correoUser = params['correo'];
    });
  }
  
  // Columns
  displayedColumns: string[] = ['nombre', 'precioNoche', 'estrellas', 'telefono', 'direccion',
                                'reservar'];
  // Datasource
  dataSource!: MatTableDataSource<HotelDisplay>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getAllHotels(){
    this.service.getAllHotels().subscribe(
      (response: Hotel[]) => {
        this.allHotels = response;
        console.log(this.allHotels);
        this.assigningValuesOfArray(); // Call the function here after fetching the data
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }    

  public assigningValuesOfArray(){
    this.HOTEL_DISPLAY_DATA = this.allHotels.map((eachHotel) =>{
      return {
        id : eachHotel.id,
        name : eachHotel.nombre,
        precioNoche : eachHotel.precioNoche,
        estrellas : eachHotel.estrellas,
        telefono : eachHotel.telefono,
        direccion : eachHotel.direccion
      };
    });

    this.dataSource = new MatTableDataSource(this.HOTEL_DISPLAY_DATA);
  }

  public reservarHotel(id: string) {
    this.comunicacion.sendHotelID(id);
    this.router.navigate(['/reserva'], {
      queryParams: { correoUser: this.correoUser , id: id }
    });
  }
  }


export interface HotelDisplay {
  id : string;
  name: string;
  precioNoche: number;
  estrellas: number;
  telefono: number;
  direccion : string;
}




