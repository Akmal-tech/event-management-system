import { useNavigate } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Indian Events. All rights reserved.</p>
      </div>
    </footer>
  )
}
