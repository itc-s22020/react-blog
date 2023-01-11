//import Hero from "@/components/hero"
import Container from "@/components/container"
import Hero from "../components/hero"
import PostBody from "../components/post-body"
import Contact from "@/components/contact"

const About = () => {
    return (
        <Container>
            <Hero title="About" subtitle="About development" />

            <PostBody>
                <p>
                    Cube が得意とする分野はモノづくり。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                </p>
                <h2> モノづくりを目指していること </h2>
                <p>
                    モノづくりではデータの解析からクリエイティブまでの幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供はが数多くありますが、特にそこを磨く作業に力を入れています。
                </p>
                <p>
                    単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
                </p>
                <h3>新しいことへのチャレンジ</h3>
                <p>
                    今までと違うものを作ることで愛着湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
                </p>

            </PostBody>

            <Contact />

        </Container>
    )
}

export default About