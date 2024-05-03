import HarvardLogoSection from "./HarvardLogoSection";
import LowerSection from "./LowerSection";
import HGSEMidsection from "./HGSEMidsection";
import HGSETop from "./HGSETop";
import HGSEFooter from "./HGSEFooter";

export default function HomePage() {
  return (
    <>
      <main>
        <HarvardLogoSection />
        <HGSETop />
        <HGSEMidsection />
        <LowerSection />
      </main>
      <HGSEFooter />
    </>
  );
}
