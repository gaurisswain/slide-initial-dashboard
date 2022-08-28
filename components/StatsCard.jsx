import React from "react";
import PropTypes from "prop-types";

const StatsCard = (props) => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center p-2 border-2 rounded-md m-2 bg-blue-100">
      <div>
        <i className="bi bi-file-bar-graph text-2xl"></i>
      </div>
      <div>
        <div className="text-slate-600 text-md">{props.title}</div>
        <div className="text-xl font-bold">{props.value}</div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

StatsCard.defaultProps = {
  title: "Revenue",
  value: "$500.35",
};

export default StatsCard;
