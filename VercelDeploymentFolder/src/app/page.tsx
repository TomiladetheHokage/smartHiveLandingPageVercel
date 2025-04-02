import APISection from "./(components)/Api";
import FAQ from "./(components)/faq";
import HeroSection from "./(components)/hero";
import Pricing from "./(components)/pricing";
import ProductSection from "./(components)/products-section";
import OurOfferings from "./(components)/our-offerings";
import Resourses from "./(components)/resourses";
import Testimonials from "./(components)/testimonial";
import WhoWeAre from "./(components)/who-we-are";
import Why from "./(components)/why";
import PoweredBy from "./(components)/powered-By"




export default function HomePage() {

    return (
        <div>
            <HeroSection />
            <PoweredBy/>
            <WhoWeAre />
            {/*<ProductSection />*/}
            <Why />
            <OurOfferings/>
            <Testimonials />
            <APISection />
            <Pricing />
            {/*<Resourses />*/}
            <FAQ />
        </div>
    );
}