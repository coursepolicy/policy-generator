import Banner from "./Banner";
import Footer from "./footer";
import TopSection from "./TopSection";
import MidSection from "./MidSection";

export default function HomePage() {
  return (
    <>
      <main>
        <Banner />
        <TopSection />
        <MidSection />
      </main>
      <Footer />
    </>
  );
}
