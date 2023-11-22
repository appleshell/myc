import React, {
  ForwardRefRenderFunction,
  ReactNode,
  useState,
  useEffect,
  useImperativeHandle,
  isValidElement,
  cloneElement,
  FormEvent,
  forwardRef,
  ReactElement,
} from 'react';
import {
  Form as AntdForm,
  Spin,
  Row,
  Col,
  FormInstance,
  Popover,
  Input,
  Space,
  Divider,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { get } from 'lodash';
import useForceUpdate from 'myc/useForceUpdate';
import { FormItemProps, FormPorps } from './type';
import { isFunc, showPlaceHolder } from '../../utils';
import { Store } from 'antd/es/form/interface';

const { Item, useForm, List, Provider } = AntdForm;

const RenderChild = ({ suffix, type, children, label, ...props }: any) => {
  if (type === 'divider') {
    return <Divider orientation="left">{label}</Divider>;
  }

  if (type === 'subTitle') {
    return <h3>{label}</h3>;
  }

  if (suffix) {
    return (
      <Space>
        {isValidElement(children) ? cloneElement(children, props) : children}
        {suffix}
      </Space>
    );
  }

  if (isValidElement(children)) {
    return cloneElement(children, props);
  }

  return children as any;
};

const InternalForm: ForwardRefRenderFunction<FormInstance, FormPorps> = (
  {
    items,
    form,
    initialValues: initialValuesInternal,
    layoutCol = { span: 24 },
    isView,
    onFinish: onFinishInternal,
    onReset: onResetInternal,
    onValuesChange: onValuesChangeInternal,
    children,
    childrenProps,
    ...props
  },
  ref,
) => {
  const [formInstance] = useForm(form);
  const [loading, setLoading] = useState(false);
  const forceUpdate = useForceUpdate();

  useImperativeHandle(ref, () => formInstance);

  const isLoadinginitialValues = isFunc(initialValuesInternal);

  const [initialStates, setInitialStates] = useState({
    isLoadinginitialValues,
    initialValues: isLoadinginitialValues ? {} : initialValuesInternal,
  });

  const getInitialValues = async () => {
    let values: Store = {};

    try {
      values = await (initialValuesInternal as () => Promise<any>)();
    } finally {
      setInitialStates({
        isLoadinginitialValues: false,
        initialValues: values,
      });
      // Fix if Form instance destory but useForm from external.
      formInstance.resetFields();
    }
  };

  useEffect(() => {
    if (initialStates.isLoadinginitialValues) {
      getInitialValues();
    } else {
      // Fix if external form instance save Store
      if (form) {
        formInstance.resetFields();
      }
      // Todo: Initial value cannot get when first mount
      forceUpdate();
    }
    return () => {
      // Todo: getInitialValues mayby remove formInsatce.resetFields()?
      if (form) {
        formInstance.resetFields();
      }
    };
  }, []);

  // If promise initialValues update need rerenader?
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    forceUpdate();
  }, [initialStates]);

  useEffect(() => {
    if (!isLoadinginitialValues) {
      formInstance.setFieldsValue(initialValuesInternal as Store);
      setInitialStates({
        ...initialStates,
        initialValues: initialValuesInternal,
      });
    }
  }, [initialValuesInternal]);

  if (!items || items.length === 0) {
    return null;
  }

  const onFinish = async (values: Store) => {
    console.log('vvvvvv', values);
    try {
      setLoading(true);
      if (onFinishInternal) {
        await onFinishInternal(values);
      }
    } finally {
      setLoading(false);
    }
  };

  const onReset = (e: FormEvent<HTMLFormElement>) => {
    formInstance.resetFields();
    if (isFunc(onResetInternal)) {
      onResetInternal(e);
    }
  };

  const onValuesChange = (changeValues: Store, values: Store) => {
    forceUpdate();
    console.log('fsfsfsfsf');
    if (isFunc(onValuesChangeInternal)) {
      onValuesChangeInternal(changeValues, values);
    }
  };

  const renderItem = (
    {
      label,
      type,
      tip,
      placeholder,
      layoutCol: itemLayoutCol,
      name,
      hidden,
      isHidden,
      isView: isItemView = isView,
      renderView,
      render,
      extra,
      suffix,
      disabled,
      noStyle = !!type,
      inputWidth,
      inputMaxLength,
      inputProps = {},
      ...itemProps
    }: FormItemProps,
    index: number,
  ) => {
    if (itemProps.required && !itemProps.rules) {
      itemProps.rules = [{ required: true, message: label + '不能为空' }];
    }

    let Comp: ReactNode;
    const { getFieldsValue } = formInstance;
    const fieldsValue = {
      ...initialValuesInternal,
      //   ...initialStates.initialValues,
      ...getFieldsValue(),
    };
    const fieldValue = get(fieldsValue, name as string);

    const itemLayoutColCombination = hidden
      ? { span: 0 }
      : itemLayoutCol ?? (type ? { span: 24 } : layoutCol);

    if (isFunc(isHidden) && isHidden(fieldValue, fieldsValue)) {
      return null;
    }

    const key = `form-item-${(name || index).toString()}`;

    const LabelWrap = tip ? (
      <>
        {label}
        <Popover
          content={
            isFunc(tip) ? () => tip(fieldValue, fieldsValue, formInstance) : tip
          }
        >
          <QuestionCircleOutlined
            style={{
              marginLeft: 4,
            }}
          />
        </Popover>
      </>
    ) : (
      label
    );

    if (isItemView) {
      Comp = showPlaceHolder(
        renderView && isFunc(renderView)
          ? renderView(fieldValue, fieldsValue, formInstance)
          : fieldValue,
        name ? placeholder : undefined,
      );
    } else {
      Comp =
        render && isFunc(render) ? (
          render(fieldValue, fieldsValue, formInstance)
        ) : (
          <Input
            allowClear
            placeholder={`请输入${label}`}
            style={
              inputWidth && inputWidth > 0 ? { width: inputWidth } : void 0
            }
            maxLength={inputMaxLength}
            {...inputProps}
          />
        );
    }

    return (
      <Col key={key} {...itemLayoutColCombination}>
        <Item
          label={type ? undefined : LabelWrap}
          extra={isFunc(extra) ? extra(fieldsValue) : extra}
          name={isItemView ? undefined : name}
          noStyle={noStyle}
          hidden={hidden}
          {...itemProps}
        >
          <RenderChild
            {...(isValidElement(Comp) ? (Comp as any).props : {})}
            suffix={isFunc(suffix) ? suffix(fieldsValue) : suffix}
            type={type}
            disabled={!!disabled}
            label={LabelWrap}
          >
            {Comp}
          </RenderChild>
        </Item>
      </Col>
    );
  };

  const FormChildren = (
    <Row gutter={24}>
      {items.map((item, index) => renderItem(item, index))}
      {children && (
        <Col
          style={{
            flex: '1',
            flexBasis: childrenProps?.single ? '100%' : 'auto',
          }}
        >
          <Item label={<span />} colon={false}>
            {children as ReactElement}
          </Item>
        </Col>
      )}
    </Row>
  );

  return (
    <Spin spinning={loading}>
      <AntdForm
        form={formInstance}
        onFinish={onFinish}
        onReset={onReset}
        onValuesChange={onValuesChange}
        initialValues={initialValuesInternal}
        {...props}
      >
        {FormChildren}
      </AntdForm>
    </Spin>
  );
};

const WrapperForm = forwardRef<FormInstance, FormPorps>(InternalForm);

type FormType = typeof WrapperForm &
  Pick<typeof AntdForm, 'Item' | 'List' | 'useForm' | 'Provider'>;

const Form: FormType = WrapperForm as FormType;

Form.Item = Item;
Form.List = List;
Form.useForm = useForm;
Form.Provider = Provider;

export default Form;
