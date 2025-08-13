import dayjs from "dayjs";

export function create_date_as_date_time(): string {
  return dayjs().format("YYYY-MM-DD HH:mm:ss");
}
