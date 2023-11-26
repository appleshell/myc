import React, {
  forwardRef,
  Ref,
  ReactElement,
  ForwardRefRenderFunction,
  useEffect,
  useState,
  useImperativeHandle,
} from 'react';
import {
  Table as AntdTable,
  TablePaginationConfig,
  Form as AntdForm,
} from 'antd';
import { SearchForm } from 'myc';
import { InternalTableProps, TableRef } from './type';

const { useForm } = AntdForm;

const Table: ForwardRefRenderFunction<TableRef, InternalTableProps> = (
  {
    searchProps,
    toolSection,
    columns,
    queryData,
    dataSource,
    defaultPagination = {
      current: 1,
      total: 0,
      pageSize: 10,
      pageSizeOptions: ['10', '20', '50', '100'],
      showSizeChanger: true,
    },
    pagination: externalPagination,
    ...restTableProps
  },
  ref,
) => {
  const { form: formInstance, ...restSearchProps } = searchProps;

  const [form] = useForm(formInstance);
  const [pagination, setPagination] =
    useState<TablePaginationConfig>(defaultPagination);

  const [tableLoading, setTableLoading] = useState(false);

  const handleSearch = async (pagination: TablePaginationConfig) => {
    setTableLoading(true);
    try {
      const formValue = await form?.validateFields();
      await queryData(formValue, pagination);
    } finally {
      setTableLoading(false);
    }
  };

  const handleTableChange = (pageData: TablePaginationConfig) => {
    setPagination({ ...pagination, ...pageData });
    handleSearch(pageData);
  };

  const requeryData = async () => {
    const resetPageData = { ...pagination, current: 1 };
    setPagination(resetPageData);
    await handleSearch(resetPageData);
  };

  const refresh = () => requeryData();

  useImperativeHandle(ref, () => ({ refresh, formIns: form }));

  useEffect(() => {
    handleSearch(pagination);
  }, []);

  return (
    <div>
      <SearchForm
        onSearch={requeryData}
        onReset={requeryData}
        form={form}
        {...restSearchProps}
      />
      {toolSection}
      <AntdTable
        columns={columns}
        onChange={handleTableChange}
        loading={tableLoading}
        dataSource={dataSource}
        pagination={
          !pagination ? pagination : { ...pagination, ...externalPagination }
        }
        {...restTableProps}
      />
    </div>
  );
};

export default forwardRef(Table) as (
  p: InternalTableProps & { ref?: Ref<TableRef> },
) => ReactElement;
