export function checkDateRange(startDate: string, endDate: string, today: string): boolean {
  
    return Boolean(startDate < today && endDate > today)
}
  