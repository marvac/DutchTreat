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

    errorMessage: string = ""

    constructor(private dataService: DataService, private router: Router) {

    }

    onLogin() {
        this.dataService.login(this.creds).subscribe(success => {
            if (success) {
                if (this.dataService.order.items.length == 0) {
                    this.router.navigate([""])
                }
                else {
                    this.router.navigate(["checkout"])
                }
            }
        }, error => this.errorMessage = "Failed to login")
    }
}