
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmiScheduleService } from './emi-schedule-service';

@Component({
  imports: [CommonModule, FormsModule, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('loan-app');

  allLoanAccounts: any;
  selectedLoanAccountId: number | null = null;
  allEmis: any;

  constructor(private service: EmiScheduleService) {
    this.getAllLoanAccounts();
  }

  getAllLoanAccounts() {
    this.service.getLoanAccounts().subscribe({
      next: res => {
        console.log(res);
        this.allLoanAccounts = res;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  getEmiSchedule() {
    if (this.selectedLoanAccountId == null) {
      this.allEmis = [];
      return;
    }

    this.service.getEmiSchedules(this.selectedLoanAccountId).subscribe({
      next: res => {
        console.log('EMI Schedule:', res);
        this.allEmis = res;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  
}
