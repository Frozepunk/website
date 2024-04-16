import NotFound from '@/app/not-found'
import Image from 'next/image'

async function getCertificateUrl(id) {
  const response = await fetch(
    `https://staging.gofr.dev/certificate-service/certificate/${id}`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const { data } = await response.json()

  return data.url
}

export default async function Certificate({ params }) {
  try {
    const certificateUrl = await getCertificateUrl(params.id)

    return (
      <Image
        className="mx-auto w-[90%] max-w-5xl"
        src={certificateUrl}
        alt="certificate"
        height={600}
        width={800}
        unoptimized
        priority
      />
    )
  } catch (error) {
    return <NotFound />
  }
}
