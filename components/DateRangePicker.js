// import { DayPicker } from 'react-day-picker';
// export default () => (
//   <div>
//     <DayPicker
//       onMonthChange={console.log}
//       onDayClick={console.log}
//       showWeekNumber
//     />
//   </div>
// );

import { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsParse from 'date-fns/parse';
import dateFnsFormat from 'date-fns/format';
import { DateUtils } from 'react-day-picker';

const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  return DateUtils.isDate(parsed) ? parsed : null;
};

const formatDate = (date, format, locale) =>
  dateFnsFormat(date, format, { locale });

const format = 'dd MMM yyyy';

const today = new Date();
const tomorrow = new Date(today);

tomorrow.setDate(tomorrow.getDate() + 1);

// helper function to count nights between dates
const numberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let dayCount = 0;

  while (end > start) {
    dayCount++;
    start.setDate(start.getDate() + 1);
  }

  return dayCount;
};

export default ({ datesChanged }) => {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

  return (
    <div className="date-range-picker-container">
      <div>
        <label>From:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
          parseDate={parseDate}
          value={startDate}
          placeholder={`${dateFnsFormat(new Date(), format)}`}
          dayPickerProps={{
            modifiers: {
              disabled: {
                before: new Date()
              }
            }
          }}
          onDayChange={day => {
            setStartDate(day);
            // pull newEndDate out of the loop to access it (get it out of local scope)
            const newEndDate = new Date(day);

            // check to see if the day picked is AFTER the endDate
            // ... if so, we need to move the endDate back until it is the day after the startDate!
            if (numberOfNightsBetweenDates(day, endDate) < 1) {
              newEndDate.setDate(newEndDate.getDate() + 1);
              setEndDate(newEndDate);
            }
            datesChanged(day, newEndDate);
          }}
        />
      </div>
      <div>
        <label>To:</label>
        <DayPickerInput
          formatDate={formatDate}
          format={format}
          parseDate={parseDate}
          value={endDate}
          placeholder={`${dateFnsFormat(new Date(), format)}`}
          dayPickerProps={{
            modifiers: {
              disabled: {
                startDate,
                before: startDate
              }
            }
          }}
          onDayChange={day => {
            setEndDate(day);
            datesChanged(startDate, day);
          }}
        />
      </div>
      <style jsx>
        {`
          .date-range-picker-container div {
            display: grid;
            border: 1px solid #ddd;
            grid-template-columns: 30% 70%;
            padding: 10px;
          }
          label {
            padding-top: 10px;
          }
        `}
      </style>

      <style jsx global>
        {`
          .DayPickerInput input {
            width: 120px;
            padding: 10px;
            font-size: 16px;
          }
        `}
      </style>
    </div>
  );
};
