export default (getFullDateString = date => {
  let jetzt = new Date(date),
    tag = jetzt.getDate(),
    tagZahl = jetzt.getDay(),
    wochentag = [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
    ],
    monatZahl = jetzt.getMonth(monat),
    monat = [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
    jahr = jetzt.getFullYear();

  let postingDatum;

  return (postingDatum = `${wochentag[tagZahl]}, ${tag}. ${
    monat[monatZahl]
  } ${jahr}`);
});
