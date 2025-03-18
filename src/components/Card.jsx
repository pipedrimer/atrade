/* eslint-disable react/prop-types */
import {
  FaCalendar,
  FaDollarSign,
  FaClipboardList,
  FaComments,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import { FaSackDollar, FaGift } from "react-icons/fa6";

const Card = ({ title, value, color, icon }) => {
  // Dynamic icon mapping
  const icons = {
    calendar: <FaCalendar className="fa-2x" />,
    dollar: <FaDollarSign className="fa-2x" />,
    tasks: <FaClipboardList className="fa-2x" />,
    comments: <FaComments className="fa-2x" />,
    dollarsack: <FaSackDollar className="fa-2x" />,
    deposit: <FaRegArrowAltCircleDown className="fa-2x" />,
    withdraw: <FaRegArrowAltCircleUp className="fa-2x" />,
    gift: <FaGift className="fa-2x" />,
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className={`card border-left-${color} shadow h-100`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
            </div>
            <div className="col-auto">
              <div className={`icon-circle bg-${color}-light`}>
                {icons[icon]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;