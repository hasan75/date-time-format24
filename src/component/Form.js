import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';

/*
*** have to install :  npm i react-datepicker
*** have to add :   import "react-datepicker/dist/react-datepicker.css";
                    import DatePicker from "react-datepicker";

*/

const Form = () => {
  // for default value
  const [startDate, setStartDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  const date = new Date(startDate).toLocaleDateString('en-CA');

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.date = date;
    data.time = currentTime.toLocaleTimeString([], {
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log(data);
  };

  //   for time input 24hours format
  //   var currentTime = new Date(startDate);
  //   var hh = currentTime.getHours();
  //   var mm = currentTime.getMinutes();
  //   let hours, minutes;
  //   if (hh < 10) {
  //     hours = '0' + mm;
  //   } else {
  //     hours = hh;
  //   }
  //   if (mm < 10) {
  //     minutes = '0' + mm;
  //   } else {
  //     minutes = mm;
  //   }
  //   var newTime = hours + ':' + minutes;
  //   console.log(newTime);

  //time input
  const timeInputRef = useRef(null);

  return (
    <div>
      <h2>There is date and time</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row g-2'>
          <div className='col-12 my-2'>
            {/* <input
              name='date'
              type='date'
              className='form-control'
              format='yyyy-mm-dd'
              defaultValue={defaultValue}
              {...register('date')}
            /> */}
            <DatePicker
              className='col-12'
              dateFormat='yyyy/MM/dd'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className='col-12 my-2'>
            {/* <input
              ref={timeInputRef}
              name='time'
              type='time'
              defaultValue={newTime}
              className='form-control'
              {...register('time')}
            /> */}
            <DatePicker
              className='col-12'
              selected={currentTime}
              onChange={(time) => setCurrentTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={1}
              timeCaption='Time'
              dateFormat='HH:mm'
              timeFormat='HH:mm'
            />
          </div>
        </div>
        <button className='btn btn-primary text-center my-4'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
