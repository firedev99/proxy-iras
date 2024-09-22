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

    refetchInterval: 10000, // refetch every 10 secs
  })

  return {
    loading: isLoading,
    isError,
    offeredCourses: data ? data.data : [],
  }
}
