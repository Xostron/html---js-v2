const kpi_result = document.querySelector(".kpi_result");

const htmlResult = parseFloat(kpi_result.textContent.slice(0,kpi_result.textContent.length-1))
console.log(htmlResult, typeof(htmlResult))


if (htmlResult < 100) {
  kpi_result.classList.add("less");
  kpi_result.classList.remove("equal");
  kpi_result.classList.remove("more");
} else if (htmlResult === 100) {
  kpi_result.classList.remove("less");
  kpi_result.classList.remove("more");
  kpi_result.classList.add("equal");
} else if (htmlResult > 100) {
  kpi_result.classList.remove("less");
  kpi_result.classList.remove("equal");
  kpi_result.classList.add("more");
}
