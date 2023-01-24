import Head from "next/head";
import { siteMeta } from "lib/constants";
const { sitetitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

const Meta = ({pagetitle}) => {

    const title = pagetitle ? `${pagetitle} | ${sitetitle}` : sitetitle

    return (
        <Head>
            <title>{pagetitle} | {sitetitle}</title>
            <meta property="og:title" content={`${pagetitle} | ${sitetitle}`} />
        </Head>
    )
}

export default Meta