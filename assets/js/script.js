// interação do botão de autoriazação do formulário

// function activeBox() {
//   if ($(".form label .box").hasClass("active")) {
//     $(".form label .box").removeClass("active");
//   } else {
//     $(".form label .box").addClass("active");
//   }
// }

// $(".form label .box").on("click", function () {
//   activeBox();
// });

// $(".form label sup").on("click", function () {
//   activeBox();
// });

// interação do botão de autoriazação do formulário FIM

let btnF = document.querySelector("#requestQuoteButton");
let btnFClose = document.querySelector("#btn-fclose");
let form = document.querySelector("#modal1");

btnF.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.remove("visually-hidden");
});
btnFClose.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.add("visually-hidden");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});

let wabtn_wrapper = document.querySelector("#cta-fixed");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    wabtn_wrapper.classList.remove("visually-hidden");
  } else if (window.scrollY < 300) {
    wabtn_wrapper.classList.add("visually-hidden");
  }
});

// emi calc
function reset() {
  document.getElementById("value1").value = 0;
  document.getElementById("value2").value = 0;
  document.getElementById("value3").value = 0;

  document.getElementById("monthly-interest").innerHTML = " $ " + 0;
  document.getElementById("monthly-payment").innerHTML = " $ " + 0;
  document.getElementById("total-repayment").innerHTML = " $ " + 0;
  document.getElementById("total-interest").innerHTML = " $ " + 0;
}
calculation();

document.querySelectorAll(".emi input").forEach((item) => {
  item.addEventListener("keypress", (event) => {
    calculation();
  });
});

function calculation() {
  // debugger;
  var loanAmount = document
    .getElementById("loan-amount")
    .value.replaceAll(",", "");
  var interestRate = document.getElementById("interest-rate").value;
  var loanDuration = document.getElementById("loan-tenure").value;

  //.......... declarations.............

  var interestPerYear = (loanAmount * interestRate) / 100;
  var monthlyInterest = interestPerYear / 12;

  var monthlyPayment = monthlyInterest + loanAmount / loanDuration;
  var totalInterestCost = monthlyInterest * loanDuration;
  var totalRepayment = monthlyPayment * loanDuration;

  //----------------monthly interest----------------------

  document.getElementById("monthly-interest").innerHTML = Math.ceil(
    monthlyInterest.toFixed(2)
  );

  //-------------Monthly payment------------

  document.getElementById("monthly-payment").innerHTML = Math.ceil(
    monthlyPayment.toFixed(2)
  );

  //-------------Total repayment-----------

  document.getElementById("total-payment").innerHTML = Math.ceil(
    totalRepayment.toFixed(2)
  );

  //--------------Total Interest cost----------------

  document.getElementById("total-interest").innerHTML = Math.ceil(
    totalInterestCost.toFixed(2)
  );

  // var data = google.visualization.arrayToDataTable([
  //   ["Loan", "Loan Breakup"],
  //   ["Loan Amount", loanAmount],
  //   ["Interest Rate", interestRate],
  //   ["Loan Tenure", loanDuration],
  //   ["Total Payment", totalRepayment.toFixed(2)],
  //   ["Total Interest", totalInterestCost.toFixed(2)],
  // ]);

  // chart.draw(data);

  // function drawVisualization() {
  //   var wrapper = new google.visualization.ChartWrapper({
  //     chartType: "ColumnChart",
  //     dataTable: [
  //       [ "Germany", "USA", "Brazil"],
  //       [ loanAmount, loanAmount, loanAmount],
  //     ],
  //     options: { title: "Countries" },
  //     containerId: "myPieChart",
  //   });
  //   wrapper.draw();
  // }

  // drawVisualization();
}
// emi calc

//

var chart = new google.visualization.ChartWrapper({
  chartType: "donut",
  containerId: "myPieChart",
  dataTable: [
    ["Loan", "Loan Breakup"],
    ["Loan Amount", 10],
    ["Interest Rate", 10],
    ["Loan Tenure", 10],
    ["Total Payment", 10],
    ["Total Interest", 60],
  ],
  options: {
    height: 300,
    width: 500,
    pieHole: 0.4,
    pieSliceText: "label",
    pieSliceTextStyle: {
      color: "black",
    },
    legend: "none",
  },
});
chart.draw();
