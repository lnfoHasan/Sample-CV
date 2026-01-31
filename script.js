const monthYearElement = document.getElementById('monthYear');
const dateElement = document.getElementById('dates');
const prvBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const poyaDays = [
  // 2021
  "2021-01-28",
  "2021-02-26",
  "2021-03-28",
  "2021-04-26",
  "2021-05-26",
  "2021-06-24",
  "2021-07-23",
  "2021-08-22",
  "2021-09-20",
  "2021-10-20",
  "2021-11-18",
  "2021-12-18",

  // 2022
  "2022-01-17",
  "2022-02-16",
  "2022-03-17",
  "2022-04-16",
  "2022-05-15",
  "2022-06-13",
  "2022-07-13",
  "2022-08-11",
  "2022-09-10",
  "2022-10-09",
  "2022-11-07",
  "2022-12-07",

      // ===== 2023 =====
  "2023-01-06",
  "2023-02-05",
  "2023-03-06",
  "2023-04-05",
  "2023-05-05",
  "2023-06-03",
  "2023-07-03",
  "2023-08-01",
  "2023-08-30",
  "2023-09-29",
  "2023-10-28",
  "2023-11-26",
  "2023-12-26",

  // ===== 2024 =====
  "2024-01-25",
  "2024-02-23",
  "2024-03-24",
  "2024-04-23",
  "2024-05-23",
  "2024-06-21",
  "2024-07-20",
  "2024-08-19",
  "2024-09-17",
  "2024-10-17",
  "2024-11-15",
  "2024-12-15",

  // ===== 2025 =====
  "2025-01-13",
  "2025-02-12",
  "2025-03-13",
  "2025-04-12",
  "2025-05-12",
  "2025-06-10",
  "2025-07-10",
  "2025-08-08",
  "2025-09-07",
  "2025-10-06",
  "2025-11-05",
  "2025-12-04",

  // ===== 2026 =====
  "2026-01-03",
  "2026-02-01",
  "2026-03-02",
  "2026-04-01",
  "2026-05-01",
  "2026-05-30", 
  "2026-06-29", 
  "2026-07-29",
  "2026-08-27",
  "2026-09-26",
  "2026-10-25",
  "2026-11-24",
  "2026-12-23",

  // ===== 2027 =====
  "2027-01-22",
  "2027-02-20",
  "2027-03-22",
  "2027-04-20",
  "2027-05-20",
  "2027-06-18",
  "2027-07-18",
  "2027-08-16",
  "2027-09-15",
  "2027-10-15",
  "2027-11-13",
  "2027-12-13",

  // ===== 2028 =====
  "2028-01-12",
  "2028-02-10",
  "2028-03-10",
  "2028-04-08",
  "2028-05-08",
  "2028-06-06",
  "2028-07-06",
  "2028-08-04",
  "2028-09-02",
  "2028-10-02",
  "2028-10-31",
  "2028-11-29",
  "2028-12-29",

  // ===== 2029 =====
  "2029-01-27",
  "2029-02-25",
  "2029-03-27",
  "2029-04-26",
  "2029-05-25",
  "2029-06-24",
  "2029-07-23",
  "2029-08-22",
  "2029-09-20",
  "2029-10-20",
  "2029-11-18",
  "2029-12-18",

  // ===== 2030 =====
  "2030-01-17",
  "2030-02-15",
  "2030-03-17",
  "2030-04-15",
  "2030-05-15",
  "2030-06-13",
  "2030-07-12",
  "2030-08-11",
  "2030-09-09",
  "2030-10-09",
  "2030-11-07",
  "2030-12-07",

];


const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    const totalDays = lastDay.getDate();

    let firstDayIndex = firstDay.getDay();
    
    if (firstDayIndex === 0) {
        firstDayIndex = 6;
    } else{
        firstDayIndex = firstDayIndex - 1;
    }

    let lastDayIndex = lastDay.getDay();

    if (lastDayIndex === 0) {
        lastDayIndex = 6;
    } else {
        lastDayIndex = lastDayIndex - 1;
    }

    const monthYearString = currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' });
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = firstDayIndex; i > 0; i--) {
        datesHTML = datesHTML + `<div class="date inactive">${prevLastDay - i + 1}</div>`;
    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const calnderDateString = date.toDateString();
        const todayDatestring = new Date().toDateString();

        let activeClass = "";

        if (calnderDateString === todayDatestring) {
            activeClass = "active";
        } else {
            activeClass = "";
        } 
          
        let dateString = formatDate(date);
        let isPoya = poyaDays.includes(dateString);
        let poyaClass = "";
        if (isPoya) {
            poyaClass = "poya";
        }

        let satandSutClass = "";
        if (date.getDay() === 6 || date.getDay() === 0) {
            satandSutClass = "weekend"
        } else {
            satandSutClass = "";
        }
        datesHTML = datesHTML + `<div class="date ${activeClass} ${poyaClass} ${satandSutClass}">${i}</div>`;
    }

    for (let i = 1; i <= 6 - lastDayIndex; i++) {
        datesHTML += `<div class="date inactive">${i}</div>`;
    }

    dateElement.innerHTML = datesHTML;
};
function formatDate(date) {
    let year = date.getFullYear();
    
    let month = date.getMonth() + 1;

    if (month < 10) {
        month = "0" + month;
    }

    let day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }

    return year + "-" + month + "-" + day;
}

prvBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();
