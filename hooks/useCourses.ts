import { services } from "@/lib/services"
import { CourseOffering } from "@/types"
import { useEffect, useState } from "react"

interface CourseOfferingResponse {
  data: {
    eligibleOfferCourses: CourseOffering[]
  }
  success: boolean
}

export function useCourses(token?: string, studentID?: string) {
  const [loading, setLoading] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)
  const [offeringCourses, setOfferingCourses] = useState<CourseOffering[]>([])

  useEffect(() => {
    if (!token || mounted || !studentID) return

    setMounted(true)
    setLoading(true)
    ;(async function fetchData() {
      const response = (await services.getDataWithToken(
        `${process.env.NEXT_PUBLIC_IUB_API}//api/v1/registration/${studentID}/all-offer-courses`,
        token
      )) as CourseOfferingResponse

      if (response.success) {
        const { eligibleOfferCourses } = response.data
        setOfferingCourses(eligibleOfferCourses)
        setLoading(false)
      }
    })()
  }, [mounted, token, studentID])

  return {
    loading,
    offeringCourses,
  }
}
