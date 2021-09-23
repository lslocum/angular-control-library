import { TemplateRef } from '@angular/core';
import { FilterMatchMode } from 'primeng/api';

export interface TableColumn {
  fieldName: string;
  fieldType: string;
  label: string;
  filterable?: boolean;
  filterOptions?: {
    dropdownValues?: { label: string; value: string; options: any[] };
    matchMode?: FilterMatchMode;
    callback?: (value) => {};
  };
  frozen?: boolean;
  selected?: boolean | 'never';
  sortable?: boolean;
  templateRef?: TemplateRef<any>;
  width?: string;
}

export function getDefaultColumn(override: Partial<TableColumn>): TableColumn {
  return Object.assign(
    {
      fieldName: '',
      fieldType: 'text',
      label: '',
      filterable: true,
      frozen: false,
      selected: true,
      sortable: true,
    },
    override
  );
}

export interface TableOptions {
  dataKey: string;
  emptyTableMessage?: string;
  selectMode?: 'single' | 'multi';
  reorderableColumns?: boolean;
  resizableColumns?: boolean;
  columnResizeMode?: 'fit' | 'expand'
  styleClass?: string;
  rowCount?: number;
  showCurrentPageReport?: boolean;
  rowsPerPageOptions?: number[];
  loading?: boolean;
  paginator?: boolean;
  currentPageReportTemplate?: string;
  filterDelay?: number;
  globalFilterFields?: string[];
  lazy?: boolean;
  exportFilename?: string;
}

export function getDefaultTableOptions(override: Partial<TableOptions>): TableOptions {
  return Object.assign(
    {
      dataKey: '',
      emptyTableMessage: 'No data to display',
      selectMode: 'single',
      reorderableColumns: true,
      resizableColumns: true,
      columnResizeMode: 'expand',
      rowCount: 10,
      showCurrentPageReport: true,
      rowsPerPageOptions: [10, 25, 50],
      loading: false,
      paginator: true,
      currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords} entries',
      filterDelay: 0,
      globalFilterFields: [],
      lazy: false
    },
    override
  );
}
