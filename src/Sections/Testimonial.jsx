import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import shedrack  from "../assets/image.png";
import chi  from "../assets/chi.jpg";
import legit  from "../assets/legit.jpg";
export default function Testimonial() {
  const testimonials = [
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
      image: "https://randomuser.me/api/portraits/girls/68.jpg",
      text: "I now understand Microsoft Office tools very well.",
    },
    {
      name: "Michael T.",
      course: "Web Development",
      image: "https://randomuser.me/api/portraits/boys/12.jpg",
      text: "We build real projects, not just theory. That’s what I love here.",
    },
    {
      name: "Grace B.",
      course: "Graphics Design",
      image: "https://randomuser.me/api/portraits/girls/22.jpg",
      text: "I discovered my passion for creativity and technology.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide (fixed)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[index];

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What Our Students Say
        </h2>

        {/* Stars */}
        <div className="flex justify-center gap-1 text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>

        <p className="text-gray-400 mb-14">
          Rated 4.9/5 from 200+ Students at Norex Brain Tech
        </p>

        {/* Testimonial Card */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl transition-all duration-700 animate-fadeIn">

          {/* Quote Icon */}
          <Quote
            size={50}
            className="absolute top-6 left-6 text-blue-500 opacity-20"
          />

          {/* Profile Image */}
          <img
            src={current.image}
            alt={current.name}
            className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 object-cover shadow-lg mb-6"
          />

          {/* Text */}
          <p className="text-gray-300 italic text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            "{current.text}"
          </p>

          {/* Name */}
          <h3 className="text-xl font-semibold text-white">
            {current.name}
          </h3>
          <p className="text-blue-400">{current.course}</p>

          {/* Navigation Buttons */}
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

          {/* Dots */}
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
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full bottom-10 right-10"></div>
    </section>
  );
}