import { ChangeEvent } from 'react';

export interface IField {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}
