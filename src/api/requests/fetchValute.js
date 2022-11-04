const axios = require('axios');

export const fetchValute = async () => await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
