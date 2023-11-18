import { AppService } from "./../../services/app.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RoutesApp } from "../../models/enums/routes.enum";
import { AppRequestService } from "../../services/app-request.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;

  constructor(
    private _router: Router,
    private _appRequestService: AppRequestService,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  goRegister(): void {
    this._router.navigate([RoutesApp.REGISTER]);
  }

  private createForm(): void {
    this.form = this._fb.group({
      phone: ["74988420307", Validators.required],
      pass: ["123", Validators.required],
    });
  }

  onClickEnter(): void {
    const paramsLogin = this.form.value;
    this.loading = true;
    this._appRequestService.login(paramsLogin).subscribe({
      next: (resp) => this.onLoginSuccess(resp),
      error: (err) => this.showSnackBar(err.error.message),
      complete: () => this.loading = false
    });
  }

  private onLoginSuccess(responseLogin: any): void {

    localStorage.setItem("token", responseLogin.token);
    const path = `${RoutesApp.DASHBOARD}/${RoutesApp.NEW_SCHEDULE}`;
    this._router.navigate([path]);
  }

  private showSnackBar(message: string): void {
    this._snackBar.open(message);
    setTimeout(() => { this._snackBar.dismiss() }, 3500);
  }
}
