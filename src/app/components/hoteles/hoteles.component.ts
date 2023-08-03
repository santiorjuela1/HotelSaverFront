import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Hotel } from 'src/app/models/hotel';
import { HotelServiceService } from 'src/app/services/hotel-service.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})


export class HotelesComponent {
  HOTEL_DISPLAY_DATA: HotelDisplay[] = [];
  allHotels: Hotel[] = [];
  constructor(private service: HotelServiceService) {
    this.getAllHotels();
  }
  
  // Columns
  displayedColumns: string[] = ['nombre', 'precioNoche', 'estrellas', 'telefono'];
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
        name : eachHotel.nombre,
        precioNoche : eachHotel.precioNoche,
        estrellas : eachHotel.estrellas,
        telefono : eachHotel.telefono
      };
    });

    this.dataSource = new MatTableDataSource(this.HOTEL_DISPLAY_DATA);
  }
}

export interface HotelDisplay {
  name: string;
  precioNoche: number;
  estrellas: number;
  telefono: number;
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];



