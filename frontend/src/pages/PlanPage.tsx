import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import Banner from '../ui/Banner';
import bitcoin from '../assets/bitcoin.png';


const PlanPage = () => {
  return (
    <div>
      <Banner
        title="Plan"
        subtitle="Flexible pricing options to suit your needs."
        image={bitcoin} />
      <Pricing />
      <WhyChooseUs />
    </div>
  );
};

export default PlanPage;
