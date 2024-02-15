document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");

    // Function to generate calendar days
    function generateCalendar() {
        const daysInMonth = 30; // Change this to the actual number of days in the month
        const firstDay = 3; // Change this to the actual first day of the month (0-6, where 0 is Sunday)

        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement("div");
            day.classList.add("day");
            day.textContent = i;
            calendar.appendChild(day);
        }

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("day", "empty");
            calendar.appendChild(emptyCell);
        }
    }

    generateCalendar();
});
