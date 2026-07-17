import { Link } from "react-router-dom";

export default function SectionHeader({ title, showViewAll, link }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">{title}</h2>
{/* 
      {showViewAll && (
        <Link to={link} className="text-sm text-gray-500 hover:text-black">
          View All →
        </Link>
      )} */}
    </div>
  );
}