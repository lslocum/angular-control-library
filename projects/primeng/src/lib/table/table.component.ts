import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { Table } from 'primeng/table';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { TableColumn, TableOptions } from 'projects/controls/src/lib/interfaces/table-columns';

@Component({
  selector: 'prime-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @ViewChild('dt') table: Table;
  @Input() columns: TableColumn[];
  @Input() data: any[];
  @Input() options: TableOptions;
  @Input() selectedRows: any[];

  frozenColumns: TableColumn[];
  selectableColumns: TableColumn[];
  selectedColumns: TableColumn[];
  loading: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.frozenColumns = this.columns.filter((c) => c.frozen);
    this.selectableColumns = this.columns.filter((column) => column.selected !== 'never');
    this.filterColumns(this.columns.filter((col) => col.selected));
  }

  filterColumns(eventValue) {
    this.columns.forEach((column) => {
      if (column.selected !== 'never') {
        column.selected = eventValue.includes(column);
      }
    });

    this.selectedColumns = this.columns.filter((column) => column.selected);
  }

  onFilterChange(eventValue, column: TableColumn) {
    const matchMode = column.filterOptions?.matchMode || FilterMatchMode.CONTAINS;
    let value = eventValue;
    if (column.filterOptions?.callback) {
      value = column.filterOptions.callback(value);
    }

    this.table.filter(value, column.fieldName, matchMode.toString());
  }

  onDateSelect(value, column: TableColumn) {
    const matchMode = column.filterOptions?.matchMode || FilterMatchMode.EQUALS;
    this.table.filter(formatDate(value), column.fieldName, matchMode.toString());
  }

  onDropdownFilter(eventValue, column: TableColumn) {
    const matchMode = column.filterOptions?.matchMode || FilterMatchMode.IN;
    const values = eventValue.map((value) =>
      typeof value === 'string' ? value : value[column.filterOptions?.dropdownValues.value]
    );

    this.table.filter(values, column.fieldName, matchMode.toString());
  }

  reorderColumns(event) {
    this.selectedColumns = event.columns;
  }
}

export function formatDate(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = '0' + month;
  }

  if (day < 10) {
    day = '0' + day;
  }

  return date.getFullYear() + '-' + month + '-' + day;
}
