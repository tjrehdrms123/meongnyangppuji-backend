import * as moment from 'moment-timezone';

export const getToday = () => {
    const DATE = new Date();
    moment.locale("ko");// 언어 번역
    return moment(DATE).tz("Asia/Seoul").format("MMMM Do YYYY, h:mm:ss a");
}