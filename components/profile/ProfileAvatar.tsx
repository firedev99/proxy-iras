import Image from "next/image"
import { firey } from "@/lib/utils"
import { ShareSchedule } from "@components"
import { CourseProps } from "@types"
import { ProfileAvatarWrapper } from "./styles"

type Props = {
  imgSrc: string
  courses: CourseProps[]
}

export default function ProfileAvatar({ imgSrc, courses }: Props) {
  return (
    <ProfileAvatarWrapper>
      <Image
        src={imgSrc}
        alt="student_avatar.jpg"
        fill
        sizes="(max-width: 768px) 124px, 468px"
        quality={100}
        placeholder="blur"
        // on image load show this fallback bg
        blurDataURL={firey.rgbDataURL(177, 144, 182)}
      />
      <ShareSchedule type="schedule" popup courses={courses} />
    </ProfileAvatarWrapper>
  )
}
