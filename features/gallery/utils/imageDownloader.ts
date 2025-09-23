export const handleDownload = (imageUrl: string, fileName: string) => {
  const link = document.createElement("a")
  link.href = imageUrl
  link.download = fileName || "image"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
