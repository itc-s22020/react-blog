import parse from "html-react-parser"
import Image from "next/image"

const ConvertBody = ({ contentHTML }) => {
    const contentReact = parse(contentHTML, {
        replace: (node) => {
            if (node.name === 'img') {
                const { src, alt, width, height } = node.attribs
                return (
                    <Image
                        src={src}
                        alt={alt}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        width={width}
                        height={height}
                        sizes="(min-width: 768px) 768px, 100vw"
                    />
                )
            }
        }
    })
    return <>{contentReact}</>
}
export default ConvertBody