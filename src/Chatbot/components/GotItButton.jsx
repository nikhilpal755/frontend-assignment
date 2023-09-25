import React from "react";

const GotItButton = (props) => {
  return (
    <div>
      <button
        type="button"
        className="inline-block rounded-lg bg-purple-500 px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-purple-300 transition duration-100 hover:bg-purple-600 focus-visible:ring active:bg-purple-700 md:text-base"
        onClick={props.actions.handleGotItButton}
      >
        Got It
      </button>
    </div>
  );
};

export default GotItButton;