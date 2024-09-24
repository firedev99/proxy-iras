import { CourseOffering } from "@/types"
import { useQuery } from "@tanstack/react-query"

type IUBCOURSEFETCHRES = { success: boolean; data: CourseOffering[] }

export function useCourses() {
  const { isLoading, data } = useQuery<IUBCOURSEFETCHRES>({
    queryKey: ["courses"],
    queryFn: async () =>
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/iub/courses`)
        .then((response) => response.json())
        .catch((err) => console.log(err)),
  })

  return {
    isLoading,
    offeredCourses: data ? data.data : [],
  }
}
