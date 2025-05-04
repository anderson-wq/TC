import GetStartedBanner from '../components/GetStartdBanner';
import GetStarted from '../components/GetStarted';
import HomeHeroSection from '../components/HomeHeroSection';
import HomeKnowAbout from '../components/HomeKnowAbout';
import HomeQuickProfit from '../components/HomeQuickProfit';
import Pricing from '../components/Pricing';
import ReferralProgram from '../components/ReferralProgram';
import TransactionTable from '../components/TransactionTable';
import WhyChooseUs from '../components/WhyChooseUs';

const HomePage = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeKnowAbout />
      <HomeQuickProfit />
      <Pricing />
      <TransactionTable />
      <GetStarted />
      <WhyChooseUs />
      <ReferralProgram />
      <GetStartedBanner />
    </div>
  );
};

export default HomePage;
