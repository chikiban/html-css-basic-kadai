const date =  new Date();
const [month, day ,year] = [
    date.getMonth() + "月",
    date.getDate() + "日",
    date.getFullYear() + "年",
];

console.log(date.toLocaleDateString());