// подстветка KPI показателя - Результат
const kpi_result = document.querySelector(".kpi_result");
const htmlResult = parseFloat(
  kpi_result.textContent.slice(0, kpi_result.textContent.length - 1)
);
console.log(htmlResult, typeof htmlResult);

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

// текущая дата
const nowDate = new Date().toLocaleDateString('ru',
{year:'numeric', month:'long'}
)
console.log(nowDate.replace(' г.', 'г.'), typeof(nowDate));

const calendar = document.querySelector('.calendar')
calendar.innerText = nowDate[0].toLocaleUpperCase()+nowDate.slice(1,nowDate.length)
console.log(calendar)


// handlers обработчики кнопок
const handlerLeftArrow = () => {
  console.log("left");
};

const handlerRightArrow = () => {
  console.log("right");
};

const handlerMenu2ArrowDown = () => {
  console.log("2 arr");
};

const handlerUser = () => {
  console.log("user");
};

const handlerWork = () => {
  console.log("work");
};
