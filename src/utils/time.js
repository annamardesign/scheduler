import moment from "moment";

export default function getHours() {
  const items = [];
  new Array(24).fill().forEach((acc, index) => {
    items.push(moment({ hour: index }).format("h:mm A"));
    items.push(moment({ hour: index, minute: 30 }).format("h:mm A"));
  });
  return items;
}
