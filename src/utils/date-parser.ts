interface DateTime {
    date: string;
    time: string;
}

/**
 * Parses the date from the given string.
 * Example: \/Date(1723728795000+0200)\/ to 2024.08.16 10:37
 * @param date
 * @returns DateTime
 */
export const parseDate = (date: string): DateTime => {
    const dateArray = date.match(/(\d+)/g);
    if (dateArray) {
        const date = new Date(parseInt(dateArray[0]));
        return {
            date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`,
            time: `${date.getHours()}:${date.getMinutes()}`
        };
    }
    return {
        date: '',
        time: ''
    };
};