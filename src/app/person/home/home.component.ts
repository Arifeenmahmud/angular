import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPerson: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.personService.get().subscribe((data: Person[]) => {
      this.allPerson = data;
    }
    );
  }

}
