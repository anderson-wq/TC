import Banner from '../ui/Banner';
import bitcoin from '../assets/bitcoin.png';
import ContactSection1 from '../components/ContactSection1';
import ContactForm from '../components/ContactForm';
const ContactPage = () => {
  return (
    <div>
      <Banner
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        image={bitcoin}
      />
      <ContactSection1 />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
