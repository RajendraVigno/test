
// import './App.css';
import { fireEvent } from '@testing-library/dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Landing() {
  return (

    <div className="App">
      <Header path={{ path: "login" }} />
      <div>
      {/* Top search bar */}
      

      <section className="p-5">
        <img src="https://assets.oyoroomscdn.com/cmsMedia/33e8565d-f803-49ab-9269-a4bc97cd835d.jpg" alt="Hero 2" className="w-full rounded" />
      </section>

      <section className="p-5">
        <img src="https://assets.oyoroomscdn.com/cmsMedia/8832fad8-25a1-4a70-a28f-6116811c625b.jpg " alt="Hero 2" className="w-full rounded" />
      </section>

      {/* Deals section */}
      <section className="p-5">
        <div className="border-2 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <FontAwesomeIcon icon={faFireFlameCurved} className="text-red-500 text-4xl" />
            <div className="text-start">
              <h2 className="font-extrabold text-lg">Get access to exclusive deals</h2>
              <p>Only the best deals reach your inbox</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              id="default-input"
              placeholder="Enter your email"
              className="w-full sm:w-64 px-4 py-2 border rounded-lg text-sm"
            />
            <button
              type="button"
              className="border border-orange-500 px-5 py-2 rounded-lg text-sm hover:bg-orange-100"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Destination info */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/b44cad94-daf3-4989-b4d6-8b22487c589a.png"
              alt="Destinations"
              className="w-full"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="font-extrabold text-2xl">There's a NESTO around. Always.</h3>
            <p>More Destinations. More Ease. More Affordable.</p>

            {/* Stats */}
            <div className="flex justify-center gap-10 pt-4">
              <div>
                <h2 className="text-xl font-bold">35+</h2>
                <p>Countries</p>
              </div>
              <div>
                <h2 className="text-xl font-bold">174,000+</h2>
                <p>Hotels & Homes</p>
              </div>
            </div>

            {/* Countries list */}
            <ul className="flex flex-wrap gap-4 pt-4 text-sm font-medium text-gray-700">
              <li>Indonesia</li>
              <li>Malaysia</li>
              <li>Denmark</li>
              <li>US</li>
              <li>UK</li>
              <li>Netherlands</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

      <Footer />;
    </div>
  );
}
export default Landing;
