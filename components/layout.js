import Container from "./container";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <main>
                <Container>{children}</Container>
            </main>

            <Footer />
        </>
    )
}

export default Layout