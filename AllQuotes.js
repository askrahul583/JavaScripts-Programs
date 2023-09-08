import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun" },
  { id: "q2", author: "Rahul", text: "Learning MERN is Fun" },
  { id: "q3", author: "Abhi", text: "MERN is Fun" },
];

function AllQuotes() {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
}

export default AllQuotes;
