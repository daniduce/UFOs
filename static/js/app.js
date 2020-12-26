// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");
function buildTable(arr) {
  tbody.html("");
  arr.forEach(obj=>{
    const row = tbody.append("tr");
    for (const key in obj){
      row.append("td").text(obj[key])
    }
  })
}
// 1. Create a variable to keep track of all the filters as an object.
let filters = {};

// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("input", onfilterchange)

// 3. Use this function to update the filters. 
function onfilterchange(){
  // 4a. Save the element that was changed as a variable.
  // 4b. Save the value that was changed as a variable.
  // 4c. Save the id of the filter that was changed as a variable.
  const userinput = d3.event.target.id
  
  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  filters[userinput]=d3.event.target.value
   // 6. Call function to apply all filters and rebuild the table
  filterTable()
  console.log(filters)
}

  // 7. Use this function to filter the table when data is entered.
  function filterTable() {

    // 8. Set the filtered data to the tableData.
    let filteredData = [...tableData];

     // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (const key in filters){
      if(filters[key]){
        filteredData = filteredData.filter(obj=>obj[key]===filters[key])
      }
    }
    
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  }
  
  // Build the table when the page loads
  buildTable(tableData);
