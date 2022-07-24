const tableBody = document.getElementById('table-body');

let flights = [
  {
    time: '08:11',
    destination: 'OMAN',
    flights: 'OX 203',
    gate: 'A 01',
    remarks: 'ON TIME',
  },
  {
    time: '12:39',
    destination: 'LONDON',
    flights: 'CL 320',
    gate: 'A 02',
    remarks: 'ON TIME',
  },
  {
    time: '13:23',
    destination: 'DUBAI',
    flights: 'DBX 201',
    gate: 'A 05',
    remarks: 'CANCELLED',
  },
  {
    time: '08:11',
    destination: 'FRANKFURT',
    flights: 'FR 402',
    gate: 'B 01',
    remarks: 'ON TIME',
  },
  {
    time: '15:22',
    destination: 'TOKYO',
    flights: 'TK 211',
    gate: 'A 32',
    remarks: 'DELAYED',
  },
];

const destinations = [
  'OMAN',
  'LONDON',
  'DUBAI',
  'FRANKFURT',
  'TOKYO',
  'BEIRUT',
];
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED'];
let hour = 15;
function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement('tr');

    for (const flightDetail in flight) {
      const tableCell = document.createElement('td');
      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement('div');

        setTimeout(() => {
          letterElement.classList.add('flip');
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }
      tableRow.append(tableCell);
    }
    tableBody.append(tableRow);
  }
}

populateTable();

function generateRandomLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
function generateRandomNumber(maxNumber) {
  const numbers = '0123456789';

  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber + 1);
    console.log('newNumbers', newNumbers);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }

  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}
function generateTime() {
  let displayHour = hour;

  if (hour < 24) {
    hour++;
  }

  if (hour >= 24) {
    hour = 1;
    displayHour = hour;
  }

  if (hour < 10) {
    displayHour = '0' + hour;
  }

  return displayHour + ':' + generateRandomNumber(5) + generateRandomNumber();
}

function shuffleUpp() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flights:
      generateRandomLetter() +
      generateRandomLetter() +
      ' ' +
      generateRandomNumber() +
      generateRandomNumber(),
    gate:
      generateRandomLetter() +
      ' ' +
      generateRandomNumber() +
      generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });
  tableBody.textContent = '';
  populateTable();
}

setInterval(shuffleUpp, 5000);
