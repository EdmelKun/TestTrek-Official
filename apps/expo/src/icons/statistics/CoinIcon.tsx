import * as React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

import type { FC } from "react";

const CoinIcon: FC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M12 24.818c6.443 0 11.666-5.18 11.666-11.57 0-6.39-5.223-11.57-11.666-11.57-6.444 0-11.667 5.18-11.667 11.57 0 6.39 5.223 11.57 11.667 11.57z"
        fill="#F4900C"
      />
      <Path
        d="M12 23.457c6.443 0 11.666-5.18 11.666-11.57C23.666 5.499 18.443.319 12 .319 5.556.318.333 5.498.333 11.888c0 6.39 5.223 11.57 11.667 11.57z"
        fill="#FFCC4D"
      />
      <Path
        d="M12 22.097c5.307 0 9.608-4.266 9.608-9.528 0-5.262-4.301-9.528-9.608-9.528-5.306 0-9.607 4.266-9.607 9.528 0 5.262 4.301 9.528 9.607 9.528z"
        fill="#FFE8B6"
      />
      <Path
        d="M12 21.416c5.307 0 9.608-4.266 9.608-9.528 0-5.262-4.301-9.528-9.608-9.528-5.306 0-9.607 4.266-9.607 9.528 0 5.262 4.301 9.528 9.607 9.528z"
        fill="#FFAC33"
      />
    </Svg>
  );
};

export default CoinIcon;