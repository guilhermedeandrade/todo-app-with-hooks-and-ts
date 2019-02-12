import React from "react";

type Props = {
  title?: string;
  features?: undefined | string[];
};

const Header: React.SFC<Props> = ({ title, features }) => {
  return (
    <React.Fragment>
      <h1>{`${title} app`}</h1>
      {features && <h2>{`built with ${features.join(" and ")}`}</h2>}
    </React.Fragment>
  );
};

Header.defaultProps = {
  title: "dale",
  features: undefined
};

export default Header;
