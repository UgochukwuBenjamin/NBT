import { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
} from "lucide-react";

import shedrack from "../assets/image.png";
import chi from "../assets/chi.jpg";
import legit from "../assets/legit.jpg";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Ikechukwu Shadrach",
      course: "Web Development",
      image: shedrack,
      text: "Before joining Norex Brain Tech, I didn't know anything about coding. Now I can build my own websites!",
    },
    {
      name: "Chigbo Chiemerie",
      course: "Graphics Design",
      image: chi,
      text: "I learned how to design professionally. My confidence has grown so much!",
    },
    {
      name: "Sunday Tiffany",
      course: "Video Editing",
      image: legit,
      text: "The teachers are patient and supportive. I can now edit videos confidently.",
    },
    {
      name: "Esther O.",
      course: "Office Automation",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "I now understand Microsoft Office tools very well.",
    },
    {
      name: "Michael T.",
      course: "Web Development",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "We build real projects, not just theory. That's what I love here.",
    },
  ]);

  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    course: "",
    image: "",
    text: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTestimonials((prev) => [
      ...prev,
      {
        name: newTestimonial.name,
        course: newTestimonial.course,
        image: newTestimonial.image,
        text: newTestimonial.text,
      },
    ]);

    setNewTestimonial({
      name: "",
      course: "",
      image: "",
      text: "",
    });

    setShowForm(false);
  };

  const current = testimonials[index];

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What Our Students Say
        </h2>

        <div className="flex justify-center gap-1 text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>

        <p className="text-gray-400 mb-14">
          Rated 4.9/5 from 200+ Students at Norex Brain Tech
        </p>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl transition-all duration-700">

          {/* Add Testimonial Button */}
          <button
            onClick={() => setShowForm(true)}
            className="absolute top-6 right-6 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition"
          >
            <Plus size={22} className="text-white" />
          </button>

          <Quote
            size={50}
            className="absolute top-6 left-6 text-blue-500 opacity-20"
          />

          <img
            src={current.image}
            alt={current.name}
            className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 object-cover shadow-lg mb-6"
          />

          <p className="text-gray-300 italic text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            "{current.text}"
          </p>

          <h3 className="text-xl font-semibold text-white">
            {current.name}
          </h3>

          <p className="text-blue-400">{current.course}</p>

          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-blue-600 p-3 rounded-full transition"
            >
              <ChevronLeft size={22} className="text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-blue-600 p-3 rounded-full transition"
            >
              <ChevronRight size={22} className="text-white" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  i === index
                    ? "bg-blue-500 w-6"
                    : "bg-gray-500 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-slate-900 w-full max-w-md p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white text-2xl font-bold">
                Add Testimonial
              </h3>

              <button onClick={() => setShowForm(false)}>
                <X className="text-white" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={newTestimonial.name}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    name: e.target.value,
                  })
                }
                className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
              />

              <input
                type="text"
                placeholder="Course"
                required
                value={newTestimonial.course}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    course: e.target.value,
                  })
                }
                className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
              />

              <input
                type="file"
                accept="image/*"
                required
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    const reader = new FileReader();

                    reader.onloadend = () => {
                      setNewTestimonial((prev) => ({
                        ...prev,
                        image: reader.result,
                      }));
                    };

                    reader.readAsDataURL(file);
                  }
                }}
                className="w-full p-3 rounded-lg bg-slate-800 text-white"
              />

              <textarea
                rows="4"
                placeholder="Write your testimonial..."
                required
                value={newTestimonial.text}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    text: e.target.value,
                  })
                }
                className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
              >
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full bottom-10 right-10"></div>
    </section>
  );
}