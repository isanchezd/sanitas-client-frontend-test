import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { LoginBoxComponent } from "./components/login-box/login-box.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";


export const LoginTestModule = {
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, SharedModule],
    declarations: [ LoginPageComponent, LoginBoxComponent ]
}