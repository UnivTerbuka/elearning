import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginToken } from "./auth.models";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
  params: new HttpParams({
    fromObject: {
      moodlewsrestformat: "json",
    },
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private LOGIN_URL = environment.loginUrl;
  private WS_URL = environment.wsUrl;
  constructor(private http: HttpClient) {}
  login(
    username: string,
    password: string,
    service = "moodle_mobile_app"
  ): Observable<LoginToken> {
    const options = httpOptions;
    options.params.append("username", username);
    options.params.append("password", password);
    options.params.append("service", service);
    options.params.append("moodlewsrestformat", "json");
    return this.http.get<LoginToken>(this.LOGIN_URL, httpOptions);
  }
}
