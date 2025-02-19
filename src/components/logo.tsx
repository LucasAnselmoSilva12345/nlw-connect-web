import Image from 'next/image'
import devstageLogo from '../assets/logo.svg'

export function Logo() {
  return <Image src={devstageLogo} alt="devStage" width={108.5} height={30} />
}
