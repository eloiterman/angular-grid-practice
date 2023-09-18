import { Component } from '@angular/core';
//import { Product } from './model';
import { customers } from './customers';
@Component({
  selector: 'my-app',
  template: `
   
        
    <kendo-grid
       
        [kendoGridBinding]="gridData"
        [filterable]="false"
        [resizable]="true"
        [groupable]="true"
        [pageSize]="10"
        [pageable]="true"
        [height]="510"
        [sortable]="{
            allowUnsort: true,
            mode: 'multiple'
        }"
        
        >
        <kendo-grid-column field="CompanyName" title="Company" [width]="140"></kendo-grid-column>
        <kendo-grid-column field="ContactName" title="Contact" [width]="120"></kendo-grid-column>
        <kendo-grid-column field="City" [width]="100"></kendo-grid-column>
        <kendo-grid-column field="ContactTitle" [width]="130"></kendo-grid-column>
    </kendo-grid>


    `,
})
export class AppComponent {
  public gridData: any[] = customers;
  /*public gridData: Product[] = [
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
      },
    },
    {
      ProductID: 2,
      ProductName: 'Chang',
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
      },
    },
    {
      ProductID: 3,
      ProductName: 'Aniseed Syrup',
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: 'Condiments',
      },
    },
  ];*/
}
