import Head from "next/head";
import { useRouter} from 'next/router'

import { siteMeta } from "lib/constants";
const { sitetitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

import siteImg from 'images/ogp.jpg'

const Meta = ({pagetitle, pageDesc, pageImg, pageImgW, pageImgH}) => {

    const title = pagetitle ? `${pagetitle} | ${sitetitle}` : sitetitle
    const desc = pageDesc ?? siteDesc

    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`

    const img = pageImg || siteImg.src
    const imgW = pageImgW || siteImg.width
    const imgH = pageImgH || siteImg.heigth
    const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}` 

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />

            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />

            <meta property="og:site_name" content={sitetitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:local" content={siteLocale} />

            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />

            <meta property="og:image" content={imgUrl}/>
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:height" content={imgH} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}

export default Meta