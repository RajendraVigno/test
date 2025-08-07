import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { MultiInputDateRangeField } from '@mui/x-date-pickers-pro/MultiInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function MultiInputDateRangePicker() {
  return (
   <div className='' style={{ }}>
     <LocalizationProvider dateAdapter={AdapterDayjs} style={{backgroundColor:"#f2f2f2 !important", height:"3rem"}}>
      <DemoContainer components={['MultiInputDateRangeField']}>
        <DateRangePicker slots={{ field: MultiInputDateRangeField }} />
      </DemoContainer>
    </LocalizationProvider>
   </div>
  );
}