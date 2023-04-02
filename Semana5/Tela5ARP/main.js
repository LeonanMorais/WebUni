const WEEKDAYS_LONG = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const WEEKDAYS_SHORT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const dateInput = document.querySelector('#date');
const tableRows = document.querySelectorAll('tbody tr');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const datePicker = document.querySelector('#date');

const disabledDays = {
  daysOfWeek: [0, 6],
};

const selectedDay = new Date();

const datepicker = new Pikaday({
  field: datePicker,
  format: 'DD/MM/YYYY',
  minDate: new Date(),
  firstDay: 0,
  disableDayFn: function(date) {
    return isDayDisabled(date, disabledDays);
  },
  onSelect: function(date) {
    selectedDay.setTime(date.getTime());
  },
  toString(date, format) {
    const day = date.getDate();
    const month = MONTHS[date.getMonth()].substring(0, 3);
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  },
  i18n: {
    previousMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    weekdaysShort: WEEKDAYS_SHORT,
    weekdaysLong: WEEKDAYS_LONG,
    months: MONTHS,
  },
});

function isDayDisabled(date, disabledDays) {
  const day = date.getDay();
  return disabledDays.daysOfWeek.indexOf(day) !== -1;
}

dateInput.addEventListener('change', function() {
  const selectedDate = this.value;

  tableRows.forEach(row => {
    const date = row.querySelector('td:nth-child(3)').textContent;

    if (date === selectedDate) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const input = this.querySelector('input[name="medicamento"]');
  const medicamento = input.value.trim();

  if (medicamento) {
    const li = document.createElement('li');
    li.innerHTML = `${medicamento}<button class="remover">Remover</button>`;
    ul.appendChild(li);
    input.value = '';
  }
});

ul.addEventListener('click', function(event) {
  if (event.target.classList.contains('remover')) {
    const li = event.target.closest('li');
    ul.removeChild(li);
  }
});