
import { cld } from "@/lib/cloudinary"

const image = cld.image("group-photo_yxdvmd").quality('auto')
function Test() {
  return (
    // Add this somewhere visible in your component to test
<div style={{width: '300px', height: '300px', border: '1px solid red'}}>
  <img src={image.toURL()} alt="image" />
</div>
  )
}

export default Test