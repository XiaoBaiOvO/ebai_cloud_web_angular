import { Injectable } from '@angular/core';
import axios from "axios";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor() { }

    get(api: any) {
        return new Observable((observe) => {
            axios.get(api)
                .then((response) => {
                    observe.next(response);
                })
                .catch((error) => {
                    observe.error(error);
                });
        });
    }



}
