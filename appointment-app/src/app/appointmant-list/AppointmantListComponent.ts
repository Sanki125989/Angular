import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-appointmant-list',
  templateUrl: './appointmant-list.component.html',
  styleUrls: ['./appointmant-list.component.css']
})
export class AppointmantListComponent implements OnInit {


  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[]  = [];
  
  minDate(): string {
    const today = new Date();
    // Format the date as "YYYY-MM-DD" for the input element
    const formattedDate = today.toISOString().split('T')[0];
    return formattedDate;
  }
  isInvalidNewAppointmentTitle(): boolean {
    // You can add your validation logic here
    // For example, check if it's empty or meets your specific criteria
    return !this.newAppointmentTitle || this.newAppointmentTitle.trim() === '';
  }
  ngOnInit(): void {
    console.log("got loaded")
    let saveAppointments=localStorage.getItem("appointments")
    this.appointments =saveAppointments ? JSON.parse(saveAppointments) : []
  }

  addAppointment() {

    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };
      this.appointments.push(newAppointment);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }
  }
  deleteAppointment(index: number){
  this.appointments.splice(index,1)
  localStorage.setItem("appointments",JSON.stringify(this.appointments))

  }
}
