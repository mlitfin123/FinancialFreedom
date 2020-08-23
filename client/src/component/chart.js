import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// chartIt();
// // make the creation of the chart asyncronous to work with getData() async function
// async function chartIt(){
//     // waits until there's data before charting
//     await getData()
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const xlabels = [];
//     const myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: xlabels,
//             datasets: [{
//                 label: 'Yahoo Finance Stocks chart',
//                 fill: false,
//                 data: [12, 19, 3, 5, 2, 3],
//                 borderColor: 
//                     'rgba(54, 162, 235, 1)',
//                 borderWidth: 2
//             }]
//         }
//     });
// };
// getData();

// async function getData(){
//     try{
//         const response = await axios.get();
//         console.log("Response-----: ", response);
//     }catch(error){
//         console.log("Error-----: ", error)
//     }
// }