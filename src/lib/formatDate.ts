import dayjs from "@/lib/dayjs";

export const formatDate = (date: string) => {
  const d = dayjs(date);
  return dayjs().diff(d, "day") < 7
    ? d.fromNow()
    : d.format("MMM D, YYYY");
};
