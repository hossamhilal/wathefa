// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = ' "Myriad Pro" , sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "transparent",
      borderColor: "#04b5ad",
      pointRadius: 5,
      pointBackgroundColor: "#04b5ad",
      pointBorderColor: "#04b5ad",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#04b5ad",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [2, 4, 3, 5, 8, 12, 2, 3, 5, 8, 1, 9, 3],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 14
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 14,
          maxTicksLimit: 14
        },
        gridLines: {
          color: "rgb(204, 204, 204)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
