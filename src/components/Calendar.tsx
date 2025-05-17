import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useRef } from "react";
import style from "../ui/book.module.css";

interface CalendarProps {
  onDateSelect: (date: string) => void;// Callback called when a date is selected
  initialDate: string;                //  Initial date shown in calendar
  selectedDate: string;               // Currently selected date (can be used for highlight)
}

const Calendar = ({ onDateSelect, initialDate }: CalendarProps) => {

  //Create ref to access calendar API
  const calendarRef = useRef<any>(null);

  // When initialDate changes, calendar navigates to that date
    useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(initialDate);
    }
  }, [initialDate]);

  //Date click handler - calls onDateSelect with clicked date
  const handleDateClick = (arg: any) => {
    onDateSelect(arg.dateStr);
  };

  return (
    <div >
      <h4 className={style.h4}>Availability Calendar</h4>
      <FullCalendar  viewClassNames={style.calendar} 
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}

        events={[
          {
            start: initialDate,
            allDay: true,
            display: "background",
            backgroundColor: "#f9d859",
          },
        ]}
        
      />
    </div>
  );
};

export default Calendar;
