export const getCurrentDate = () => {
    const today = new Date();
    const month = `${today.getMonth() + 1}`.padStart(2, '0'); // getMonth() ret 0-11
    return `${today.getFullYear()}-${month}-${today.getDate()}`;
};

// For dates from db which have T before time fo datetime
export const splitTDate = (date: string) => {
    return date.split('T')[0];
};

export const getDaysLeft = (dueDate: string) => {
    const currDate = new Date(getCurrentDate());
    const due = new Date(dueDate);
    // Check what happens for daylight savings
    currDate.setHours(0, 0, 0);
    due.setHours(0, 0, 0);

    const oneDay = 24 * 60 * 60 * 1000;
    return Math.ceil((due - currDate) / oneDay);
};
