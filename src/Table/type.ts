import { TablePaginationConfig, TableProps } from 'antd';
import { StoreValue } from 'antd/es/form/interface';
import { SearchFormPorps } from 'myc/SearchForm/type';
import { ReactElement } from 'react';

export interface InternalTableProps extends TableProps<any> {
  searchProps: Omit<SearchFormPorps, 'onSearch' | 'onReset'>;
  toolSection?: ReactElement;
  queryData: (formValue: StoreValue, pageData: TablePaginationConfig) => void;
  dataSource: any[];
  pagination?: TablePaginationConfig | false;
  defaultPagination?: TablePaginationConfig;
}

export interface TableRef {
  /**
   * Refresh Table data with existing search params
   */
  refresh: () => void;
}
