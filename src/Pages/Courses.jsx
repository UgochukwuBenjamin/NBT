import { Code, Monitor, Palette, Video, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "web-development",
    title: "Web Development",
    icon: <Code size={40} />,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "office-automation",
    title: "Office Automation",
    icon: <Monitor size={40} />,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    icon: <Palette size={40} />,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    icon: <Video size={40} />,
    image:
      "https://images.unsplash.com/photo-1574717024453-3540563a6c2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    icon: <Shield size={40} />,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Courses() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">

      <h2 className="text-4xl font-bold mb-16 text-center">
        Our Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {courses.map((course) => (
          <div key={course.id} className="card-border">

            <div
              className="relative h-[300px] rounded-xl overflow-hidden flex flex-col justify-center items-center text-center text-white"
              style={{
                backgroundImage: `url(${course.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 px-6">

                <div className="flex justify-center mb-4">
                  {course.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-200 mb-4">
                  Professional training with hands-on practical projects.
                </p>

                <Link
                  to={`/courses/${course.id}`}
                  className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-sm font-semibold transition"
                >
                  Read More
                </Link>

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}