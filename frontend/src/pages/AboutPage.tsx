import AboutSection from '../components/AboutSection';

import CapitalInvInfo from '../components/CapitalInvIfo';
import WhyChooseUs from '../components/WhyChooseUs';
import Banner from '../ui/Banner';
import bitcoin from '../assets/bitcoin.png';

const AboutPage = () => {
  return (
    <div>
      <Banner
        title="About Us"
        subtitle="Get to know who we are and what we stand for."
        image={bitcoin}
      />

      <AboutSection />
      <CapitalInvInfo />
      <WhyChooseUs />
    </div>
  );
};

export default AboutPage;
