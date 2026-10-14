
import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class EmiScheduleService {

  http = inject(HttpClient);

  // Base URL only
  url = "https://localhost:44319/api";

  getLoanAccounts() {
    return this.http.get<any>(
      this.url + "/LoanAccount/GetAllLA"
    );
  }

  
getEmiSchedules(loanAccountId: number) {
  return this.http.get<any>(
    this.url + "/EmiSchedule/GetEMI/" + loanAccountId
  );
}

}
