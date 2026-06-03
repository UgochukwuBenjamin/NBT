import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Courses from "./Pages/Courses.jsx";
import CourseDetails from "./Pages/CourseDetails.jsx";
import Contact from "./Pages/Contact.jsx";
import Enroll from "./Pages/Enroll.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/courses" element={<Courses />} />
          {/* Course Details Page */}
          <Route path="/courses/:id" element={<CourseDetails />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}