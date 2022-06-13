import { DateTime } from "luxon";

const DATE_FORMAT = "dd/MM/yyyy";
const TIME_FORMAT = "hh:mm";

export function getDateFormat() {
    return DATE_FORMAT;
}

export function formatDate(date) {
    return DateTime.fromISO(date).toFormat(DATE_FORMAT);
}

export function formatDateWith(date, dateFormat) {
    return DateTime.fromISO(date).toFormat(dateFormat);
}

export function formatTime(date) {
    return DateTime.fromISO(date).toFormat(TIME_FORMAT);
}