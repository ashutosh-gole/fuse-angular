import { Component } from '@angular/core';

export interface PeriodicElement {
  budget_type: string;
  total_budget: string;
  spentInMoney: string;
  spentInPercent: string;
  remainingInMoney: string;
  remainingInPercent: string;
  trending_type: string;
  budget_type_bgcolor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { budget_type: ' Wireframing ', total_budget: '14,880.00', spentInMoney: '14,000.00', spentInPercent: '94.08', remainingInMoney: '880.00', remainingInPercent: '5.92', budget_type_bgcolor: '#3c4252', trending_type: 'trending_up' },
  { budget_type: ' Design ', total_budget: '21,080.00', spentInMoney: '17,240.34', spentInPercent: '81.78 ', remainingInMoney: '3,839.66', remainingInPercent: '18.22', budget_type_bgcolor: '#4caf50', trending_type: 'trending_up' },
  { budget_type: ' Coding ', total_budget: '34,720.00', spentInMoney: '3,518.00', spentInPercent: '10.13', remainingInMoney: '31,202.00', remainingInPercent: '89.87', budget_type_bgcolor: '#f44336', trending_type: 'trending_down' },
  { budget_type: ' Marketing ', total_budget: '34,720.00', spentInMoney: '0.00', spentInPercent: '0.00', remainingInMoney: '34,720.00', remainingInPercent: '100.00', budget_type_bgcolor: '#039be5', trending_type: 'trending_flat' },
  { budget_type: ' Extra ', total_budget: '18,600.00', spentInMoney: '	0.00', spentInPercent: '0.00', remainingInMoney: '34,720.00', remainingInPercent: '100.00', budget_type_bgcolor: '#ff9800', trending_type: 'trending_flat' }
];

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent {

  displayedColumns: string[] = ['budget_type', 'total_budget', 'spentInMoney', 'spentInPercent', 'remainingInMoney', 'remainingInPercent'];
  dataSource = ELEMENT_DATA;

}