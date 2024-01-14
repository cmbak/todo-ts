export const getCurrentDate = () => {
    const today = new Date();
    const month = `${today.getMonth() + 1}`.padStart(2, '0'); // getMonth() ret 0-11
    return `${today.getFullYear()}-${month}-${today.getDate()}`;
};

// For dates from db which have T before time fo datetime
export const splitTDate = (date: string) => {
    return date.split('T')[0];
};
