const urlParams = new URLSearchParams(window.location.search);
const inputTime = urlParams.get('time');

const listContainer = document.getElementById('timezone-list');

if (inputTime === null) {
    listContainer.innerHTML = "<strong><em>Oops! Looks like an invalid time was added to the URL!</em></strong>";
}

const [time, zone] = inputTime.split(/(GMT|UTC)/);
const [hours, minutes] = time.split(':');

let date = new Date();
date.setUTCHours(parseInt(hours), parseInt(minutes), 0, 0);

const targetTimezones = [{
        label: 'London',
        zone: 'Europe/London'
    },
    {
        label: 'S&#227;o Paulo',
        zone: 'America/Sao_Paulo'
    },
    {
        label: 'New York',
        zone: 'America/New_York'
    },
    {
        label: 'Lisbon',
        zone: 'Europe/Lisbon'
    },
    {
        label: 'Gaza',
        zone: 'Asia/Gaza'
    },
    {
        label: 'Tokyo',
        zone: 'Asia/Tokyo'
    },
    {
        label: 'Sydney',
        zone: 'Australia/Sydney'
    },
    {
        label: 'Dubai',
        zone: 'Asia/Dubai'
}];

targetTimezones.forEach(({label, zone}) => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
        timeStyle: 'short',
        timeZone: zone
    });

    const timeString = formatter.format(date);

    const item = document.createElement('div');

    item.innerHTML = `<strong>${label}</strong>: ${timeString}`;
    listContainer.appendChild(item);
});