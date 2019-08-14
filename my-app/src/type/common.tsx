import { ReactNode } from 'react';

export interface IStateContainTable {
  columns: {
    key: number | string,
    title: string,
    dataIndex: string,
    render ?: (text: string | number | boolean, record ?: any, index ?: number) => ReactNode,
  }[],
  page ?: number,
  size ?: number,
} 