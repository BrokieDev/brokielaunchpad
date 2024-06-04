import React from 'react'
import Image from 'next/image'
function Social() {
  return (
    <div className="flex items-center justify-end space-x-4">
    <a href="#"><Image width={20} height={4} src="/X.png" alt="Social Media Icon 1" /></a>
    <a href="#"><Image width={30} height={4} src="/telegram.png" alt="Social Media Icon 2" /></a>
    <a href="#"><Image width={30} height={4} src="/dex.png" alt="Social Media Icon 3" /></a>
    <a href="#"><Image width={25} height={4} src="/dyor.jpg" alt="Social Media Icon 4" /></a>
</div>
  )
}

export default Social