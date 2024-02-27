import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseurl='http://localhost:8080/springboot-crud-rest/employees';

  constructor (private http:HttpClient){}

  getEmployee (id:number):Observable<any>{
    return this.http.get(`${this.baseurl}/${id}`);
  }

  createEmployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseurl}`,employee)
  }

  updateEmployee(id:number,employee:any):Observable<Object>{
    return this.http.put(`${this.baseurl}/${id}`,employee);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`);
  }

  getEmployeesList():Observable<any>{
    return this.http.get(`${this.baseurl}`);
  }
}
