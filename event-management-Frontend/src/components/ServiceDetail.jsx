import { useParams, Link } from "react-router-dom";
import services from "./servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <img src={service.img} alt={service.title} className="w-full h-64 object-cover rounded-xl shadow-lg mb-8" />
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{service.details}</p>
      <Link to="/services" className="text-indigo-600 hover:underline">← Back to Services</Link>
    </div>
  );
}
