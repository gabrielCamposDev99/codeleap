import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateByLocale(dateProvided: Date) {
  if (!dateProvided) return 'Date not provided';
  const locale = navigator.language;
  const date = new Date(dateProvided);
  const options = {
    dateStyle: 'short',
    timeStyle: 'short',
  } as Intl.DateTimeFormatOptions;
  const formattedDate = new Intl.DateTimeFormat(locale, options).format(date);
  return formattedDate;
}
