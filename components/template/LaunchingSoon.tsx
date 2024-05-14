import { TextWrapper } from "./styles"

type LSType = {
  title?: string
  className?: string
}

export default function LaunchingSoon({ title = "launching🚀soon🤞🏼" }: LSType) {
  return (
    <TextWrapper
      className="announcement"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3>{title}</h3>
    </TextWrapper>
  )
}
