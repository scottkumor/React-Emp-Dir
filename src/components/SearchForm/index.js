import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="">
      <div className="">
        <label htmlFor="">Search Term:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className=""
          placeholder="Type in a search term to begin"
          id="term"
        />
        <button type="submit" onClick={props.handleFormSubmit} >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
