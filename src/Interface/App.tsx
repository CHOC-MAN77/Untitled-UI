
const Navbar = () => (
  <nav className="flex justify-between items-center p-4 border-b border-gray-200">
    <div className="text-lg font-bold">Untitled UI</div>
    <ul className="flex space-x-6">
      <li>Home</li>
      <li>Products</li>
      <li>Solutions</li>
      <li>Pricing</li>
      <li>Resources</li>
      <li>Company</li>
      <li>Careers</li>
    </ul>
    <button className="bg-black text-white px-4 py-2 rounded">Get started</button>
  </nav>
);

const HeroSection = () => (
  <section className="text-center py-20">
    <h1 className="text-4xl font-bold">
      We’ve got an <span className="underline decoration-pink-500">entire</span> team dedicated
      to supporting you and your business
    </h1>
    <p className="text-gray-500 mt-4">Get help 24/7, with our award-winning support network of payment experts.</p>
    <div className="mt-6 space-x-4">
      <button className="border border-gray-300 px-4 py-2 rounded">📅 Book a call</button>
      <button className="bg-black text-white px-4 py-2 rounded">Get in touch</button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white p-10 grid grid-cols-5 gap-6">
    <div>
      <h3 className="font-semibold">Product</h3>
      <ul>
        <li>Overview</li>
        <li>Features</li>
        <li>Solutions <span className="border border-white bg-gray-700 text-xs px-2 rounded">New</span></li>
        <li>Tutorials</li>
        <li>Pricing</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold">Company</h3>
      <ul>
        <li>About us</li>
        <li>Careers</li>
        <li>Press</li>
        <li>News</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold">Resources</h3>
      <ul>
        <li>Blog</li>
        <li>Newsletter</li>
        <li>Events</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold">Social</h3>
      <ul>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Facebook</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold">Legal</h3>
      <ul>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Cookies</li>
      </ul>
    </div>
  </footer>
);

const App = () => (
  <div className="font-sans">
    <Navbar />
    <HeroSection />
    <Footer />
  </div>
);

export default App;