import { useState } from "react";
import { useAppSelector } from "../hooks/hooks";
import style from "../ui/book.module.css";

interface BookWindowProps {
  selectedDate: string;
}

const BookWindow = ({ selectedDate }: BookWindowProps) => {
 const clinners = useAppSelector((state) => state.clinners.data);
  const [selectedClinner, setSelectedClinner] = useState<number | null>(null);

  const availableClinners = clinners.filter(clinner =>
    clinner.dateAviable.includes(selectedDate)
  );

  const handleBook = (clinnerId: number) => {
    alert(`Booking confirmed for ${selectedDate} with cleaner ${clinnerId}`);
  };

  return (
    <>
      <h2 className={style.title}>
        Available cleaners for {selectedDate}
      </h2>

      {availableClinners.length === 0 ? (
        <p className={style.p}>No cleaners available for this date.</p>
      ) : (
        <div className={style.list}>
          {availableClinners.map((clinner) => (
            <div
              key={clinner.id}
              className={`${style.card} ${
                selectedClinner === clinner.id ? style.selected : ""
              }`}
              onClick={() => setSelectedClinner(clinner.id)}
            >
              <img src={clinner.img} alt={clinner.name} className={style.avatar} />
              <div className={style.info}>
                <h3>{clinner.name}</h3>
                <p>{clinner.description}</p>
                <p>
                  <strong>Types:</strong> {clinner.typeCleaning.join(", ")}
                </p>
                <p>
                  <strong>Rate:</strong> {clinner.rate}
                </p>
                <p>
                  <strong>Price:</strong> {clinner.price} ₪
                </p>
                <button
                  className={style.button}
                  onClick={() => handleBook(clinner.id)}
                  disabled={selectedClinner !== clinner.id}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BookWindow;