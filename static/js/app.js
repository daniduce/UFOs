// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// 1. Create a variable to keep track of all the filters as an object.
function buildTable(...args: [data: any]) {
  tbody.html("");

  // 3. Use this function to update the filters. 
  function buildTable(data);

  // 4a. Save the element that was changed as a variable.
  let date = d3.select("#datetime").property("value");

  // 4b. Save the value that was changed as a variable.
  let filteredData = tableData;

  // 4c. Save the id of the filter that was changed as a variable.
  
  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  // 6. Call function to apply all filters and rebuild the table
  filterTable();

}
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
  buildTable(tableData);
