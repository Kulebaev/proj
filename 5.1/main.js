/*let emails = ["em1B@g.com", "em2B@g.com", "em3B@g.com", "em4B@g.com", "em5B@g.com", "em1V@g.com", "em2V@g.com", "em3V@g.com", "em4V@g.com", "em5V@g.com"];
let blackList = ["em1B@g.com", "em2B@g.com", "em3B@g.com", "em4B@g.com", "em5B@g.com"];*/


export default function getValidEmail(emails, blackList){

    return emails.filter(emails => !blackList.includes(emails));

}
