import fs from "promise-fs";
import path from "path";
import getSlugs from "./getSlugs";

export default async function getData(filename) {
  const filePath = path.join(process.cwd(), "src", "data", filename);
  const rawData = await fs.readFile(filePath);
  let parsedData = JSON.parse(rawData).reverse();
  const high = parsedData.map((item) => {
    if (!item.high) return 0;
    return item.high;
  });
  const low = parsedData.map((item) => {
    if (!item.low) return 0;
    return item.low;
  });
  const open = parsedData.map((item) => {
    if (!item.open) return 0;
    return item.open;
  });
  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };
  const date = parsedData.map((item) => {
    if (!item.date) return 0;
    const tempDate = new Date(item.date);
    return tempDate.toLocaleDateString("en-GB", options);
  });
  const symbol = parsedData[0].symbol;
  const exchange = parsedData[0].exchange;

  const data = {
    high,
    low,
    open,
    date,
  };

  const lastItem = parsedData[parsedData.length - 1];
  const lastDate = new Date(lastItem.date);
  const lastDateTime =
    lastDate.toLocaleDateString("en-GB", options) +
    "@" +
    lastDate.getHours() +
    ":00";

  const info = {
    // title: "Information",
    items: [
      { name: "Symbol", value: symbol },
      // { name: "Symbol", value: symbol },
      // { name: "Exchange", value: exchange },
      { name: "Exchange", value: exchange },
    ],
  };
  const latest = {
    title: "Latest",
    items: [
      { name: "Date & Time", value: lastDateTime },
      // { name: "Symbol", value: symbol },
      // { name: "Exchange", value: exchange },
      { name: "Open", value: lastItem.open },
      { name: "High", value: lastItem.high },
      { name: "Low", value: lastItem.low },
    ],
  };
  const dataToday = parsedData.filter((item) => {
    const tempDate = new Date(item.date);
    return (
      (tempDate.getDate() === lastDate.getDate()) &
      (tempDate.getMonth() === lastDate.getMonth()) &
      (tempDate.getFullYear() === lastDate.getFullYear())
    );
  });
  const today = {
    high: dataToday.map((item) => item.high),
    low: dataToday.map((item) => item.low),
    open: dataToday.map((item) => item.open),
    date: dataToday.map((item) => item.date),
  };

  let prevDate = new Date(lastDate.getTime());
  prevDate.setDate(prevDate.getDate() - 1);

  const dataYesterday = parsedData.filter((item) => {
    const tempDate = new Date(item.date);
    return (
      (tempDate.getDate() === prevDate.getDate()) &
      (tempDate.getMonth() === prevDate.getMonth()) &
      (tempDate.getFullYear() === prevDate.getFullYear())
    );
  });
  const yesterday = {
    high: dataYesterday.map((item) => item.high),
    low: dataYesterday.map((item) => item.low),
    open: dataYesterday.map((item) => item.open),
    date: dataYesterday.map((item) => item.date),
  };
  console.log(dataYesterday);
  const links = getSlugs();
  return { data, latest, today, yesterday, info, links };
}
