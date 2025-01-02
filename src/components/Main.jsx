import { useEffect } from "react";
import { useState } from "react";

export default function Main() {
  const numbersToBeExtracted = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  ];
  const [numbers, seNumbers] = useState(numbersToBeExtracted);
  const [currentNumber, setCurrentNumber] = useState(null);

  /* Estraggo un numero dall'array */
  const handleExtractNumber = () => {
    if (numbers.length === 0) return alert("Hai estratto tutti i numeri!");

    const randomNumber = Math.floor(Math.random() * numbers.length);
    const newNumber = [...numbers];
    const extractNumber = newNumber.splice(randomNumber, 1)[0];
    seNumbers(newNumber);
    setCurrentNumber(extractNumber);
    console.log(newNumber);
    console.log(`Hai estratto il numero ${extractNumber}`);
  };

  return (
    <>
      <div className="row d-flex" style={{ maxWidth: "1000px" }}>
        {numbers.map((number) => (
          <div className="numbers col-2">{number}</div>
        ))}
      </div>
      <div style={{ maxWidth: "320px" }}>
        <div>Ultimo numero estratto</div>
        <div className="extract-number">{currentNumber}</div>
        <hr />
        <div className="d-flex flex-column gap-2">
          <button className="btn btn-warning" onClick={handleExtractNumber}>
            Estrai
          </button>
          <button className="btn btn-danger">Termina gioco</button>
        </div>
      </div>
    </>
  );
}
