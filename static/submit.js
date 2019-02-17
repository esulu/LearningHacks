// const url = 'process.php';
// const form = document.querySelector('form');
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});
realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});


// percentage wheel
// let ctx = document.getElementById('doughnutChart').getContext('2d');
// let labels = ['', 'resemblance'];
// let colorHex = ['#e6e6e6','#43AA8B'];
// let myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         datasets: [{
//             data: [40,60],
//             backgroundColor: colorHex
//         }],
//         labels: labels
//     },
//     options: {
//         responsive: false,
//         hover: {
//             mode: 'index'
//         },
//         legend: {
//             position: ''
//         },
//         plugins: {
//             datalabels: {
//                 color: 'white',
//                 anchor: 'end',
//                 align: 'bottom',
//                 offset: 0,
//                 borderWidth: 2,
//                 borderColor: '#fff',
//                 borderRadius: 10,
//                 backgroundColor: (context) => {
//                     return context.dataset.backgroundColor;
//                 },
//                 font: {
//                     weight: 'bold',
//                     size: '10'
//                 },
//                 formatter: (value) => {
//                     return value + ' %';
//                 }
//             }
//         }
//     }
// })
