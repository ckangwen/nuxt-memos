import dayjs from "dayjs";

const formatDate = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

const DAILY_TIMESTAMP = 3600 * 24 * 1000;

interface DailyUsageStat {
  timestamp: number;
  count: number;
  date: string;
}

const getInitialUsageStat = (usedDaysAmount: number, beginDayTimestamp: number) => {
  const initialUsageStat: DailyUsageStat[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= usedDaysAmount; i++) {
    const timestamp = beginDayTimestamp + DAILY_TIMESTAMP * i;
    initialUsageStat.push({
      timestamp,
      count: 0,
      date: formatDate(new Date(timestamp)),
    });
  }
  return initialUsageStat;
};

const WIDTH = 12;
const HEIGHT = 7;

export const useHeatMap = () => {
  const todayTimeStamp = new Date().getTime();
  const todayDay = new Date().getDay() + 1;
  const usedDaysAmount = (WIDTH - 1) * HEIGHT + todayDay;
  const beginDayTimestamp = todayTimeStamp - usedDaysAmount * DAILY_TIMESTAMP;
  const allStat = getInitialUsageStat(usedDaysAmount, beginDayTimestamp);
  const currentStat = ref<DailyUsageStat | undefined>(
    allStat.find((item) => {
      return item.date === formatDate(new Date());
    }),
  );
  const nullCell = new Array(7 - todayDay).fill(0);

  return {
    allStat,
    nullCell,
    currentStat,
    todayTimeStamp,
  };
};
