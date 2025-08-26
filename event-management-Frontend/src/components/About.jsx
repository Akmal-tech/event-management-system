import { useNavigate } from 'react-router-dom';



export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img src="/src/assets/about.jpg" alt="About us" className="rounded-xl shadow-lg"/>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">About Us</h2>
          <p className="text-whitegray-600 mb-4">
            At Indian Events, we are passionate about turning ideas into unforgettable experiences. 
            With years of expertise, our team ensures flawless execution from concept to completion.
          </p>
          <p className="text-whitegray-600">
            Whether it's a corporate gathering, a wedding, or a grand festival, 
            we tailor every detail to exceed expectations.
          </p>
        </div>
      </div>
    </section>
  )
}
