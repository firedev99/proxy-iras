import { CourseOffering } from "@/types"
import { useQuery } from "@tanstack/react-query"

export function useCourses() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: async () =>
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/iub/courses`)
        .then((response) => response.json())
        .catch((err) => console.log(err)),
    select: (data) => data as { success: boolean; data: CourseOffering[] },
  })

  return {
    loading: isLoading,
    isError,
    offeredCourses: data ? data.data : [],
  }
}
