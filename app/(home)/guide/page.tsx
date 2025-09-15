import CommonPage from "@/features/common/components/CommonPage"
import { teachersGuide } from "@/lib/data"

export default function page() {
  return (
    <CommonPage
      title={teachersGuide.title}
      description={teachersGuide.description}
    />
  )
}
