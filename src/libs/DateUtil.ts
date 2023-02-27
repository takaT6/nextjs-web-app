export const formatDate = (sec: string | number): string => {
    const udate = new Date(Number(sec) * 1000);
    const formatedDate = `${udate.getFullYear()}年${udate.getMonth() + 1}月${udate.getDate()}日`;
    return formatedDate;
};