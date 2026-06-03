import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./Pages/courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Contact from "./pages/Contact.jsx";
import Enroll from "./pages/Enroll.jsx";

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