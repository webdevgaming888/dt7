import React from "react";

import { withNamespaces } from "react-i18next";

const WhyUs = ({ t }) => {
  return (
    <div className="footer-col">
      <div className="why-us">
        <div className="footer-title">
          {t("whyus", { compName: window.compName })}?
        </div>
        <div className="footer-content">
          {t("whyusdesc", { compName: window.compName })}
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(WhyUs);
