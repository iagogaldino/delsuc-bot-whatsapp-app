import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserWhatsapp } from '../../models/interfaces/user-whatsapp';
import { AppRequestService } from '../../services/app-request.service';
import { AppService } from '../../services/app.service';
import { TimeSelectorComponent } from '../time-selector/time-selector.component';

@Component({
  selector: 'app-new-schedule',
  standalone: false,
  providers: [],
  templateUrl: './new-schedule.component.html',
  styleUrl: './new-schedule.component.scss'
})
export class NewScheduleComponent implements OnInit {

  public form!: FormGroup;
  public panelOpenState = true;
  public loading = false;
  public appRequestService: AppRequestService= inject(AppRequestService);
  public appService: AppService= inject(AppService);
  public durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar, private _fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getContacts();
    this.createForm();
  }

  createForm(): void {
    this.form = this._fb.group({
      title: ['title', Validators.required],
      image: [''],
      text: ['text', Validators.required],
      date: ['date', Validators.required],
      time: ['time', Validators.required],
    });
  }

  getTimeSelector() {
    return TimeSelectorComponent;
 }

 onClickUser(item: any): void {
    item.selected = item.selected ? false : true;
  }

  getContacts(): void {
    this.loading = true;
    if (this.appService.conctacts.length) {return;}
    this.appRequestService.getContacts().subscribe({
      next: (response: UserWhatsapp[]) => {
        this.appService.conctacts = response;
        this.loading = false;
        this._snackBar.open(`${this.appService.conctacts.length} contatos carregados`);
        setTimeout(()=>{this._snackBar.dismiss()}, 3500);
      }, error: (err)=>{this.loading = false}
    });
  }

  save(): void {
    console.log(this.form.value)
  }



}
