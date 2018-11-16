import { Component } from "@angular/core";
import { DataService } from "../shared/data-service";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    public creds = {
        username: "",
        password: ""
    }

    constructor(private dataService: DataService, private router: Router) {

    }

    onLogin() {
        
    }
}