import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(dateString: string): string {
  const currentDate: Date = new Date();
  const inputDate: Date = new Date(dateString);

  const timeDifferenceInSeconds: number = Math.floor(
    (currentDate.getTime() - inputDate.getTime()) / 1000
  );

  const secondsInMinute: number = 60;
  const secondsInHour: number = secondsInMinute * 60;
  const secondsInDay: number = secondsInHour * 24;
  const secondsInWeek: number = secondsInDay * 7;

  if (timeDifferenceInSeconds < secondsInMinute) {
    return `${timeDifferenceInSeconds} seconds ago`;
  } else if (timeDifferenceInSeconds < secondsInHour) {
    const minutesAgo: number = Math.floor(
      timeDifferenceInSeconds / secondsInMinute
    );
    return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifferenceInSeconds < secondsInDay) {
    const hoursAgo: number = Math.floor(
      timeDifferenceInSeconds / secondsInHour
    );
    return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifferenceInSeconds < secondsInWeek) {
    const daysAgo: number = Math.floor(timeDifferenceInSeconds / secondsInDay);
    return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
  } else {
    const weeksAgo: number = Math.floor(
      timeDifferenceInSeconds / secondsInWeek
    );
    return `${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"} ago`;
  }
}
