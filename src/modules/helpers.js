function formatDate(date) {
  const options = {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h24",
  };
  const formatedDate = date.toLocaleDateString("en-US", options);

  return formatedDate;
}

export { formatDate };
