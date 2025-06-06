import React from 'react';

const BannerReview = () => {
  return (
    <svg
      width="313"
      height="417"
      viewBox="0 0 313 417"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_409_38)">
        <rect x="4" width="305" height="409" rx="62" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_409_38"
          x="0"
          y="0"
          width="313"
          height="417"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_409_38" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_409_38"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BannerReview;
