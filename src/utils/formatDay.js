// Import the necessary functions from the library
import { format, isToday, isTomorrow, parseISO } from 'date-fns';

export function formatDay(dateString) {
  // Convert the string '2025-07-29' into a real Date object
  const date = parseISO(dateString);
  
  if (isToday(date)) {
    return 'Today';
  }
  
  if (isTomorrow(date)) {
    return 'Tomorrow';
  }
  
  // 'E' format gives the short day name (e.g., 'Wed')
  // 'EEEE' would give the full name ('Wednesday')
  return format(date, 'E'); 
}