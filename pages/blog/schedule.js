import { getPostBySlug } from 'lib/api'
import Container from '@/components/container'
import PostHeader from '@/components/post-header'
import Image from 'next/image'
import { height, width } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '@/components/two-column'
import PostBody from '@/components/post-body'

export default function Schedule({
    title, 
    publish,
    content,
    eyecatch,
    categories,
}) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish}/>

                <figure>
                    <Image 
                        src={eyecatch.url}
                        alt=""
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                    />
                </figure>

                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <div dangerouslySetInnerHTML={{ __html: content}} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar></TwoColumnSidebar>
                </TwoColumn>

            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule'
    const post = await getPostBySlug(slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    }
}

//getStaticProps()
//export default Schedule