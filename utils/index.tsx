import { ReactNode } from 'react';

export function isFunc(value: unknown): value is (...args: any[]) => any {
  return typeof value === 'function';
}

export function showPlaceHolder(value: ReactNode, placeholder?: string) {
  if (value === null || value === undefined || value === '') {
    return placeholder;
  }
  return value;
}
