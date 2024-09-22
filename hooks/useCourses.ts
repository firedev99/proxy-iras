// import { CourseOffering } from "@/types"
import { CourseOffering } from "@/types"
import { useQuery } from "@tanstack/react-query"

type IUBCOURSEFETCHRES = { success: boolean; data: CourseOffering[] }

export function useCourses() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: async (): Promise<IUBCOURSEFETCHRES> =>
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/iub/courses`)
        .then((response) => response.json())
        .catch((err) => console.log(err)),
  })

  return {
    loading: isLoading,
    isError,
    offeredCourses: data ? data.data : [],
  }
}
