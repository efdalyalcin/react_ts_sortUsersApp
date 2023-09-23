import { useEffect, useState } from "react";
import "./Pagination.scss";

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  numberOfPages: number;
};

export default function Pagination({
  currentPage,
  setCurrentPage,
  numberOfPages,
}: Props) {
  const [buttonArray, setButtonArray] = useState<number[]>([]);

  useEffect(() => {
    const arr = [];

    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i);
    }

    setButtonArray([...arr]);
  }, [numberOfPages]);

  const prevHandler = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextHandler = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="Pagination">
      <button className="Pagination__prev" onClick={prevHandler}>
        Previous
      </button>
      {numberOfPages <= 6
        ? buttonArray.map((num) => (
            <button
              onClick={() => setCurrentPage(num)}
              key={num}
              className={
                "Pagination__page-numbers" +
                (currentPage === num ? " Pagination__page-numbers--active" : "")
              }
            >
              {num}
            </button>
          ))
        : buttonArray.map((num, i) => {
            if (
              i === 0 ||
              (currentPage === 1 && i < 3) ||
              i === currentPage - 2 ||
              i === currentPage - 1 || // this is the current page
              i === currentPage ||
              i === numberOfPages - 1 ||
              (currentPage <= 2 && (i === numberOfPages - 2 || i === numberOfPages - 3))
            ) {
              return (
                <button
                  onClick={() => setCurrentPage(num)}
                  key={num}
                  className={
                    "Pagination__page-numbers" +
                    (currentPage === num
                      ? " Pagination__page-numbers--active"
                      : "")
                  }
                >
                  {num}
                </button>
              );
            } else if ((i === currentPage - 3 || i === currentPage + 1) || (currentPage === 1 && i === 3)) {
              return (
                <button
                  onClick={() => setCurrentPage(num)}
                  key={num}
                  className="Pagination__dots"
                >
                  ...
                </button>
              );
            }

            return null;
          })}
      <button className="Pagination__next" onClick={nextHandler}>
        Next
      </button>
    </div>
  );
}
