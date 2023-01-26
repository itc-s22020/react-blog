import Container from "@/components/container"
import Meta from '@/components/meta'
import Hero from "@/components/hero"
//import Hero from "../components/hero"

const Blog = () => {
    return (
        <Container>
            <Meta pagetitle="blog" pageDesc="ブログの記事一覧"/>
            <Hero
                title="blog"
                subtitle="Recent Posts"
            />
        </Container>
    )
}

export default Blog