import { StoreValue } from 'antd/es/form/interface';
import { FormPorps } from 'myc/Form/type';
import { ReactNode } from 'react';

export interface SearchFormPorps extends FormPorps {
  extraButtons?: ReactNode;
  onSearch: (values: StoreValue) => void;
  onReset?: () => void;
  initialCount?: number;
}
