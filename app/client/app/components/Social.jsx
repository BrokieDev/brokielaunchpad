import React from 'react'
import Image from 'next/image'
function Social() {
  return (
    <div className="flex items-center justify-end space-x-4">
    <a target='_blank' href="https://x.com/brokieinu"><Image width={20} height={4} src="/X.png" alt="Social Media Icon 1" /></a>
    <a target='_blank' href="https://t.me/BrokieInu"><Image width={30} height={4} src="/telegram.png" alt="Social Media Icon 2" /></a>
    <a target='_blank' href="https://www.dextools.io/app/en/solana/pair-explorer/6F29wfFZmSnaCvQqBhaC1pZ5ysr5zwFPihjUbcu8YpDy?t=1717435424607"><Image width={30} height={4} src="/dex.png" alt="Social Media Icon 3" /></a>
    <a target='_blank' href="https://dyor.io/token/EQC2wH1I9MVQCWvVCNfA85N_TF3tSI50DEE597QNdO66rclf"><Image width={25} height={4} src="/dyor.jpg" alt="Social Media Icon 4" /></a>
</div>
  )
}

export default Social