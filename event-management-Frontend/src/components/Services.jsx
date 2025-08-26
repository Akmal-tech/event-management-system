import { useNavigate } from 'react-router-dom';
// import CorporateEvents from ;


const services = [
  {
    id: 1,
    title: "Corporate Events",
    slug: "corporate-events",
    desc: "Professional event planning for conferences, seminars, and product launches.",
    details: "We provide end-to-end planning for corporate events, including venue selection, catering, audio-visual support, guest management, and live streaming. Perfect for seminars, team-building activities, product launches, and board meetings.",
    img: "/src/assets/service1.jpg", 
    pageName: "../CorporateEvents"
  },
  {
    id: 2,
    title: "Weddings & Celebrations",
    slug: "weddings-celebrations",
    desc: "Beautiful, stress-free weddings and private celebrations.",
    details: "Our team specializes in designing dream weddings with flawless execution. From venue decoration, catering, entertainment, and photography, we handle everything so you can focus on enjoying your big day stress-free.",
    img: "/src/assets/service2.jpg",
    pageName: "../Wedding"
  },
  {
    id: 3,
    title: "Concerts & Festivals",
    slug: "concerts-festivals",
    desc: "Large-scale event management for concerts and entertainment festivals.",
    details: "We excel in organizing large-scale concerts and music festivals with crowd management, stage setup, lighting, sound engineering, artist coordination, and ticketing services.",
    img: "/src/assets/service3.jpg",
    pageName:"../Concert"
  },
  {
    id: 4,
    title: "Birthday Party",
    slug: "birthday-party",
    desc: "Fun-filled birthday parties with customized themes and activities.",
    details: "From kids' birthdays to milestone celebrations, we provide theme décor, games, entertainers, cakes, and party favors. Everything you need for a memorable birthday bash.",
    img: "/src/assets/service4.jpg",
    pageName:"../Birthday"
  },
  {
    id: 5,
    title: "Cultural Festival",
    slug: "cultural-festival",
    desc: "Celebrate culture with vibrant festivals and community events.",
    details: "We plan and manage cultural festivals with traditional performances, food stalls, art exhibitions, and workshops. Perfect for communities, schools, and cultural organizations.",
    img: "/src/assets/service5.jpg",
    pageName: "../CulturalFestival"
  },
  {
    id: 6,
    title: "Sports Events",
    slug: "sports-events",
    desc: "End-to-end management of sports tournaments, leagues, and athletic competitions.",
    details: "We organize sports tournaments and athletic meets, covering everything from registrations, fixtures, referees, venue setup, branding, and live score updates.",
    img: "/src/assets/service6.jpg",
    pageName:"../SportEvents"
  }
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-20 bg-gray-50 " >
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            
            <div key={service.id} onClick={() => navigate(service.pageName)} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src={service.img} 
                alt={service.title} 
                className="h-48 w-full object-cover"
               
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
