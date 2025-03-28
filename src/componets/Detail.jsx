import React, { useEffect } from "react";
import "../assets/styled.css";
import { motion, useAnimation, useInView } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import coupleImage from "../assets/image/couple.png";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeddingPhotoGallery from "./WeddingPhotoGallery";
import Wish from "./Wish";



const openGoogleMaps = () => {
  window.open('https://www.google.com/maps/place/OCIC+Wedding+Hall/@11.6084732,104.9219371,17z/data=!3m1!4b1!4m6!3m5!1s0x3109532931ed88a1:0xa1094f5df89be45d!8m2!3d11.6084732!4d104.924512!16s%2Fg%2F11kprmg0fk?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D', '_blank');
};


// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};



const handleAddToCalendar = () => {
  const title = encodeURIComponent('Monivann and Sophanith Day');
  const details = encodeURIComponent('30 march 2025');
  const location = encodeURIComponent('OCIC');

  // Set your event's start and end time in YYYYMMDDTHHMMSSZ format (UTC)
  const startTime = '20250330T090000Z';
  const endTime = '20250330T100000Z';
  

  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startTime}/${endTime}`;

  window.open(calendarUrl, '_blank');
};




function AnimatedSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Detail() {
  return (
    <>
      {/* Fixed Background */}
      <div className="background-container"></div>

      {/* Scrollable Content */}
      <div className="content-container">
        <AnimatedSection>
          <h1 className="responsive-h1 motion1 mt-1 ">
            សិរីមង្គលអាពាហ៏ពិពាហ៏
          </h1>
        </AnimatedSection>

        {/* Couple Names */}
        <div style={{ display: "flex", justifyContent: "center", gap: "80px" }}>
          <AnimatedSection delay={0.2}>
            <div className="fw-bold motion3 mt-1" style={{ textAlign: "center" }}>
              កូនប្រុសនាម<br />
              <p className="text-white mt-3">សុវត្ថិ មុន្នីវណ្ណ</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="fw-bold motion4 mt-1" style={{ textAlign: "center" }}>
              កូនស្រីនាម<br />
              <p className="text-white mt-3">ទូច ពៅសុផានិត</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Couple Image */}
        <AnimatedSection delay={0.6}>
          <motion.img
            src={coupleImage}
            alt="Couple"
            className="couple-image rounded-circle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </AnimatedSection>

        {/* Wedding Date */}
        <AnimatedSection delay={0.8}>
          <div className="motion1" style={{ fontSize: "20px" }}>
            ដែលនឹងប្រព្រឹត្តទៅនៅថ្ងៃ<br />
            <p className="text-white motion1 mt-3 mb-3" style={{ fontSize: "30px" }}>
              ថ្ងៃសុក្រ ទី១០ មីនា ២០២៥
            </p>
          </div>
          <AnimatedSection delay={1.2}>
        <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleAddToCalendar}
    >
      <Button
        variant="primary"
        size="lg"
        className="text1 fw-bold"
        style={{ display: 'block', margin: '0 auto' }}
      >
        កត់ទុកក្នុងប្រតិទិន
      </Button>
    </motion.div>
        </AnimatedSection>
        </AnimatedSection>

        {/* Program Sections */}
        <AnimatedSection>
          <h1 className="responsive-h1 motion1 mt-1">កម្មវិធីមង្គលអាពាហ៏ពិពាហ៏</h1>
        </AnimatedSection>
        <AnimatedSection>
          <h2 className="motion6 " style={{ fontSize: "33px" }}>កម្មវិធីពេលព្រឹក</h2>
        </AnimatedSection>

        {[
          { time: "០៦:០០ ព្រឹក", event: "ពិធីសូត្រមន្តចម្រើនព្រះរិត្ត" },
          { time: "០៧:០៩ ព្រឹក", event: "ពិធីដង្ហែកំណត់" },
          { time: "០៧:៤៥ ព្រឹក", event: "ពិធីជូនផ្កាស្លា និយាយជើងការ និងរៀបរាប់ផ្លែឈើ" },
          { time: "០៨:១៨ ព្រឹក", event: "ពិធីសែនដូនតា ពិសាស្លា និងបំពាក់ជញ្ជៀន" },
          { time: "០៩:០៩ ព្រឹក", event: "ពិធីកាត់សក់បង្កក់សិរី" },
          { time: "១០:០៩ ព្រឹក", event: "ពិធីពេលា" },
          { time: "១១:០០ ព្រឹក", event: "ពិធីបើកវាំងនន សំពះផ្ទឹម បង្វិលពពិល សែនចងដៃ បាចផ្កាស្លា ព្រះថោងតោងស្បៃនាងនាគ" },
          { time: "១២:០០ ព្រឹក", event: "អញ្ជើញភ្ញៀវកិត្តយសពិសារភោជនិយអាហារថ្ងៃត្រង់" },
        ].map((item, index) => (
          <AnimatedSection key={index} delay={0.3 * index}>
            <div className="motion7 khmer-moul-text" style={{ fontSize: "20px" }}>
              ម៉ោង {item.time}
              <p className="t2 mt-2" style={{ fontSize: "17px" }}>{item.event}</p>
            </div>
          </AnimatedSection>
        ))}

        {/* Evening Program */}
        <AnimatedSection>
          <h2 className="motion6 khmer-moul-text" style={{ fontSize: "33px" }}>កម្មវិធីពេលល្ងាច</h2>
        </AnimatedSection>
        <AnimatedSection delay={1.0}>
          <div className="motion7 khmer-moul-text" style={{ fontSize: "20px" }}>
            ម៉ោង ០៥:០០ ល្ងាច<br />
            <p className="t2 mt-2" style={{ fontSize: '18px' }}>
              ទទួលបដិសណ្ឋារកិច្ចនៅមជ្ឈមណ្ឌលសន្និបាត OCIC អគារ E
            </p>
          </div>
        </AnimatedSection>

        {/* Button */}
        <AnimatedSection delay={1.2}>
        <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
      variant="primary"
      size="lg"
      className="text1 fw-bold"
      style={{ display: 'block', margin: '0 auto' }}
      onClick={openGoogleMaps}
    >
      បើកផែនទី
    </Button>
    </motion.div>
        </AnimatedSection>
        <div>
        
        <AnimatedSection delay={1.0}>
          <div className="motion7 khmer-moul-text mt-5" style={{ fontSize: "28px" }}>
            វិចិត្រសាល<br />
            <p className="t2 mt-2" style={{ fontSize: '12px' }}>
              ចុចលើរូបនីមួយៗដើម្បីពង្រីក
            </p>
          </div>
        </AnimatedSection>
          <WeddingPhotoGallery/>
        <div className="mt-5"><Wish/></div>

        </div>
       </div>
    </>
  );
}

export default Detail;







