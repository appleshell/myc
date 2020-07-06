import React, { ReactNode, FC } from 'react';
import cn from 'classnames';
import './style.scss';

interface IRowItemProps {
  label: string | ReactNode;
  labelAlign?: 'left' | 'center' | 'right';
  showBorder?: boolean;
}

const RowItem: FC<IRowItemProps> = props => {
  const { label, labelAlign, showBorder, children } = props;
  const prefix = 'row-item';
  const rowCls = cn(prefix, { [`${prefix}-border`]: showBorder });
  const labelCls = cn(`${prefix}-label`, {
    [`${prefix}-label-${labelAlign}`]: labelAlign,
  });
  return (
    <div className={rowCls}>
      <label className={labelCls}>{label}</label>
      <div className="row-item-content">{children}</div>
    </div>
  );
};

export default RowItem;
