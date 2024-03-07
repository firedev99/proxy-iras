import { classroom_v1 } from "googleapis"
import { dateOptions } from "@/lib/snippets/dateOptions"
import { firey } from "@/lib/utils"
import {
  CourseAnnouncementWrapper,
  MaterialInformation,
  PostMaterial,
  PostMaterialWrapper,
} from "./styles"
import Image from "next/image"

type Props = {
  post: classroom_v1.Schema$Announcement
}

export default function CourseAnnouncement({ post }: Props) {
  // attatch link element to in the text
  const sentences = firey.linkify(post.text ?? "proxy")

  return (
    <>
      <CourseAnnouncementWrapper>
        <div className="text" dangerouslySetInnerHTML={{ __html: sentences }} />

        {post.materials && post.materials.length > 0 && (
          <PostMaterialWrapper>
            {post.materials.map((item, mI) => (
              <PostMaterial
                href={
                  item.link?.url ??
                  (item.driveFile?.driveFile?.alternateLink as string)
                }
                key={`material__${mI}`}
                target="_blank"
              >
                <div className="material_thumb">
                  <Image
                    fill
                    alt={`material__${mI}.jpg`}
                    src={
                      (item.driveFile
                        ? item.driveFile.driveFile?.thumbnailUrl
                        : item.link?.thumbnailUrl) as string
                    }
                    sizes="(max-width: 768px) 124px, 468px"
                    placeholder="blur"
                    // on image load show this fallback bg
                    blurDataURL={firey.rgbDataURL(217, 217, 217)}
                  />
                </div>
                <MaterialInformation>
                  <h4>{item.driveFile?.driveFile?.title}</h4>
                  <span className="file_type">
                    {item.driveFile?.driveFile?.title?.slice(-3)}
                  </span>
                </MaterialInformation>
              </PostMaterial>
            ))}
          </PostMaterialWrapper>
        )}
        <span>
          posted on{" "}
          {new Date(post.creationTime ?? 0).toLocaleDateString(
            "en-us",
            dateOptions
          )}
        </span>
      </CourseAnnouncementWrapper>
    </>
  )
}
