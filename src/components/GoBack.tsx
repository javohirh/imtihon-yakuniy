import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
type path = { path: string };
export function GoBack({ path }: path) {
  return (
    <Link
      className="flex items-center justify-start gap-3 text-[#999999] font-medium text-sm"
      to={path}
    >
      <FaArrowLeftLong />
      Вернуться
    </Link>
  );
}
