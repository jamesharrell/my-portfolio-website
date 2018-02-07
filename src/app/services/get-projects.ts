import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { GITHUB_API } from '../constants';

@Injectable()

export class GetProjectsService {
    constructor(private http: Http,
        @Inject(GITHUB_API) public github_api: string) {

    }

    getProjects() {
        return this.http.get(this.github_api).map((response: Response) => response.json());
    }
}
