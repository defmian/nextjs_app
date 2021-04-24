import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time
      className="tracking-widest text-xs title-font font-normal mb-1"
      dateTime={dateString}
    >
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
