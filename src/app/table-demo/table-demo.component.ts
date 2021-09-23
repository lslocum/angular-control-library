import { AfterViewInit, Component, ContentChild, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FilterMatchMode } from 'primeng/api';
import {
  getDefaultColumn,
  getDefaultTableOptions,
  TableColumn,
  TableOptions,
} from 'projects/controls/src/lib/interfaces/table-columns';
import { customers, representatives, statuses } from './table-data';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss'],
})
export class TableDemoComponent implements OnInit {
  @ViewChild('countryName', { static: true }) countryName: TemplateRef<any>;
  @ViewChild('representativeName', { static: true }) representativeName: TemplateRef<any>;
  @ViewChild('button', { static: true }) button: TemplateRef<any>;
  @ViewChild('activity', { static: true }) activity: TemplateRef<any>;
  @ViewChild('status', { static: true }) status: TemplateRef<any>;

  data = customers;
  tableOptions: TableOptions;
  tableColumns: TableColumn[] = [];

  constructor() {
    this.tableOptions = getDefaultTableOptions({
      dataKey: 'id',
      selectMode: 'multi',
      styleClass: 'p-datatable-customers',
      globalFilterFields: ['name', 'country.name', 'representative.name', 'status'],
    });
  }

  ngOnInit(): void {
    this.tableColumns = [
      getDefaultColumn({
        fieldName: 'name',
        label: 'Name',
        filterOptions: { matchMode: FilterMatchMode.STARTS_WITH },
      }),
      getDefaultColumn({ fieldName: 'country.name', label: 'Country', templateRef: this.countryName }),
      getDefaultColumn({
        fieldName: 'representative.name',
        label: 'Representative',
        fieldType: 'dropdown',
        filterOptions: {
          dropdownValues: { label: 'name', value: 'name', options: representatives },
          matchMode: FilterMatchMode.IN,
        },
        templateRef: this.representativeName,
      }),
      getDefaultColumn({
        fieldName: 'date',
        label: 'Date',
        fieldType: 'date',
        filterOptions: { matchMode: FilterMatchMode.EQUALS },
        selected: false,
      }),
      getDefaultColumn({
        fieldName: 'status',
        label: 'Status',
        fieldType: 'dropdown',
        filterOptions: { dropdownValues: { label: 'label', value: 'value', options: statuses } },
        templateRef: this.status,
      }),
      getDefaultColumn({
        fieldName: 'activity',
        label: 'Activity',
        filterOptions: {
          matchMode: FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
          callback: (value) => {
            if (value && value.trim().length) {
              const activity = parseInt(value);
              return isNaN(activity) ? null : activity;
            }
          },
        },
        templateRef: this.activity,
      }),
      getDefaultColumn({
        fieldName: 'actions',
        fieldType: 'button',
        label: '',
        selected: 'never',
        sortable: false,
        filterable: false,
        width: '8rem',
        templateRef: this.button,
      }),
    ];
  }

  onButtonClick() {
    window.alert('button clicked');
  }
}
