import React from "react";

const AlertTicker = () => {
  const alerts = [
    "🚨 Conference will be held only in PHYSICAL MODE.",
    "Acceptance notification has been sent.",
    " Last date of submission for PhD Colloquium is 31st October.",
    "Registration is till 31st October for Early Bird and 15th November for Standard.",
    "Early Bird registration is open now."
  ];

  return (
    <div className="bg-yellow-400 text-black text-center  text-2xl font-semibold">
      <div className="ticker">
        <div className="ticker-content px-4 py-1">
          <div className="ticker-loop flex gap-16">
            {alerts.concat(alerts).map((text, index) => (
              <span key={index} className="px-8 flex-shrink-0">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style> 
        {`
          .ticker {
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .ticker-content {
            display: block;
            white-space: nowrap;
            overflow: hidden;
          }

          .ticker-loop {
            display: inline-flex;
            min-width: 200%;
            animation: scroll-left 20s linear infinite;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AlertTicker;
