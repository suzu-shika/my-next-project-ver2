import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// UTC（協定世界時）を扱うためのプラグインを適用
dayjs.extend(utc);
// タイムゾーンを考慮するためのプラグインを適用
dayjs.extend(timezone);

// 日付の文字列を受け取り、
export const formatDate = (date: string) => {
  // 日本時間を考慮した日付表示に変換して文字列を返す
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
}
