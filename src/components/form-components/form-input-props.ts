import { Theme, SxProps  } from '@mui/material';
import { ReactNode } from 'react';
import { Control } from 'react-hook-form';

export interface FormInputProps {
  name: string;
  control: Control<any>;
  label: string;
  setValue?: any;
  type?: string;
  sx?: SxProps<Theme>;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}