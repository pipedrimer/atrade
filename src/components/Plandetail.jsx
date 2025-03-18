// eslint-disable-next-line react/prop-types
const PlanDetail = ({ text }) => {
    return (
      <li className="mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="12"
          width="12"
          className="me-2 text-primary"
        >
          <path
            d="M23.37.29a1.49,1.49,0,0,0-2.09.34L7.25,20.2,2.56,15.51A1.5,1.5,0,0,0,.44,17.63l5.93,5.94a1.53,1.53,0,0,0,2.28-.19l15.07-21A1.49,1.49,0,0,0,23.37.29Z"
            style={{ fill: "currentColor" }}
          />
        </svg>
        {text}
      </li>
    );
  };

  export default PlanDetail