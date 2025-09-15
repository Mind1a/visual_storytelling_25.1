import CommonPage from "@/features/common/components/CommonPage"
import { aboutProject } from "@/lib/data"

export default function page() {
  return (
    <CommonPage
      title={aboutProject.title}
      description={aboutProject.description}
    />
  )
}
