export const getCurrentDate = () => {
    const today = new Date();
    const month = `${today.getMonth() + 1}`.padStart(2, '0'); // getMonth() ret 0-11
    return `${today.getFullYear()}-${month}-${today.getDate()}`;
};
