import {
  ColProps,
  FormProps as AntdFormProps,
  FormInstance,
  FormItemProps as AntdFormItemProps,
  InputProps,
  CardProps,
} from 'antd';
import { Store, StoreValue } from 'antd/es/form/interface';
import { ReactElement, ReactNode } from 'react';

export interface FormCommonProps {
  placeholder?: string;
  isView?: boolean;
  layoutCol?: ColProps;
}

export interface FormItemProps extends AntdFormItemProps, FormCommonProps {
  render?: (
    fieldValue: StoreValue,
    fieldsValue: Store,
    form: FormInstance,
  ) => ReactElement;

  renderView?: (
    fieldValue: StoreValue,
    fieldsValue: Store,
    form: FormInstance,
  ) => ReactNode;

  isHidden?: (fieldValue: StoreValue, fieldsValue: Store) => boolean;

  type?: 'divider' | 'subTitle';

  tip?:
    | ReactNode
    | ((
        fieldValue: StoreValue,
        fieldsValue: Store,
        form: FormInstance,
      ) => ReactNode);
  extra?: ReactNode;
  suffix?: ReactNode | ((fieldsValue: Store) => ReactNode);
  disabled?: boolean;
  inputWidth?: number;
  inputMaxLength?: number;
  inputProps?: InputProps;
}

export interface FormPorps extends AntdFormProps, FormCommonProps {
  items: FormItemProps[];
  children?: React.ReactNode;
  /** Enhance initialValues, but only trigger once  */
  initialValues?: Store | (() => Promise<Store>);
  /** Show mode */
  mode?: 'card';
  /** Effective in card mode */
  cardProps?: CardProps;
  onFinish?: (values: Store) => Promise<unknown> | any;
  childrenProps?: {
    single?: boolean;
  };
}
