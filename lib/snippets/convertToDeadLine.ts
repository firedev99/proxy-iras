import { GoogleDueTimeProps } from "@/types"

// convert deadline for adjustment
export function convertToDeadline({
  day,
  month,
  year,
}: GoogleDueTimeProps): Date {
  const deadlineDate = new Date(year, month - 1, day)
  return deadlineDate
}
