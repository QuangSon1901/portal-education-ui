export const getDayInWeek = (d, dInW) => {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : dInW);
    return new Date(d.setDate(diff));
};

export const getNextWeek = (firstDay) => {
    var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
    return nextWeek;
};

export const getPrevWeek = (firstDay) => {
    var prevWeek = new Date(firstDay.getTime() - 7 * 24 * 60 * 60 * 1000);
    return prevWeek;
};
