import NavBar from "./NavBar";
import Footer from "./Footer";

const Service = () => {
  return (
    <>
      <NavBar />
      <div className="px-10 my-10">
        <p className="text-3xl font-medium">Our Services</p>
        <p className="indent-10 my-3 text-lg">
          At GoExplore, we believe in making your travel dreams come true. With
          a wide array of personalized travel services, we are here to ensure
          your journey is as seamless and enjoyable as possible. Explore our
          offerings below:
        </p>

        <ul className="space-y-3 my-5">
          <li>
            <p className="text-lg font-medium">1. Customized Tour Packages</p>
            <p className="indent-10">
              Discover a world of possibilities with our tailored tour packages.
              Whether you are an adventure enthusiast, a culture seeker, or a
              leisure traveler, we curate trips that match your preferences and
              budget.
            </p>
          </li>
          <li>
            <p className="text-lg font-medium">2. Destination Planning</p>
            <p className="indent-10">
              Not sure where to go? Let our travel experts guide you! From
              hidden gems to world-famous landmarks, we’ll help you choose the
              perfect destination to suit your style.
            </p>
          </li>
          <li>
            <p className="text-lg font-medium">3. Booking Assistance</p>
            <p className="indent-10">
              From flights to accommodations and local transportation, we handle
              all your bookings so you can focus on enjoying your trip.
            </p>
          </li>
          <li>
            <p className="text-lg font-medium">4. Guided Tours</p>
            <p className="indent-10">
              Experience destinations like never before with our knowledgeable
              guides. Learn fascinating stories, explore iconic landmarks, and
              immerse yourself in local culture.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Service;
