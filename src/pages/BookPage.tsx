import { useState, useEffect } from "react";
import BookWindow from "../components/BookWindow";
import Calendar from "../components/Calendar";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchClinnersByType } from "../store/clinnersSlice";
import style from "../ui/book.module.css";
import { Link } from "react-router-dom";

// Cleaning types available for selection
const cleaningTypes = ["Regular Cleaning", "Windows Cleaning", "Deep Cleaning", "Office Cleaning"] as const;

// Type for selectedType, allowing only valid values from cleaningTypes
export type CleaningType = typeof cleaningTypes[number];


const BookPage = () => {
  const dispatch = useAppDispatch();

  // State for selected cleaning type (default is "Regular Cleaning")
  const [selectedType, setSelectedType] = useState<CleaningType>("Regular Cleaning");

  // State for selected date (default is current date in YYYY-MM-DD format)
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);

  // Getting cleaners data and loading status from Redux store
  const { status } = useAppSelector((state) => state.clinners);

  // Fetch cleaners when component mounts or selectedType changes
  useEffect(() => {
    dispatch(fetchClinnersByType(selectedType));
  }, [dispatch, selectedType]);

  // Handler for cleaning type change in select dropdown
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value as CleaningType;
    setSelectedType(type);
    dispatch(fetchClinnersByType(type));
  };
  return (
    <>
 
    <div className={style.pageBook}>
      <div className={style.calendarWrapper}>
        <div className={style.btn}><Link to="/home">Home</Link></div>
        <div className={style.controls}>
          <h3 className={style.h3}>Book now!</h3>
          <select
          name="select"
            value={selectedType}
            onChange={handleTypeChange}
            className={style.select}
          >
            {cleaningTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        {status === "loading" ? (
          <p>Loading cleaners...</p>
        ) : (
          <Calendar onDateSelect={setSelectedDate} initialDate={selectedDate} selectedDate={selectedDate} />
        )}
      </div>
      <div className={style.bookWindowWrapper}>
        <BookWindow selectedDate={selectedDate} />
      </div>
    </div>
    </>
  );
};

export default BookPage;