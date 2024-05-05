import React, { useState } from "react";

export const Bubble = ({ isActive }: { isActive: boolean }) => {
  return (
    <div>
      {!isActive ? (
        <svg
          width="64"
          height="64"
          viewBox="0 0 56 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transition: "fill 0.3s ease-in-out",
            cursor: "pointer",
            zIndex: 10,
            fill: isActive ? "#FFB34F" : "url(#paint0_radial_100_436)",
          }}
        >
          <g filter="url(#filter0_d_100_436)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28 51.6492C40.9596 51.6492 51.4655 41.1434 51.4655 28.1838C51.4655 15.2241 40.9596 4.71829 28 4.71829C15.0404 4.71829 4.53455 15.2241 4.53455 28.1838C4.53455 41.1434 15.0404 51.6492 28 51.6492ZM28 47.9827C38.9347 47.9827 47.799 39.1184 47.799 28.1838C47.799 17.2491 38.9347 8.38477 28 8.38477C17.0653 8.38477 8.20103 17.2491 8.20103 28.1838C8.20103 39.1184 17.0653 47.9827 28 47.9827Z"
              fill="url(#paint0_radial_100_436)"
            />
          </g>
          <g filter="url(#filter1_d_100_436)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28 47.9827C38.9347 47.9827 47.799 39.1184 47.799 28.1838C47.799 17.2491 38.9347 8.38477 28 8.38477C17.0654 8.38477 8.20105 17.2491 8.20105 28.1838C8.20105 39.1184 17.0654 47.9827 28 47.9827Z"
              fill="#0D2A28"
            />
            <path
              d="M47.799 28.1838C47.799 39.1184 38.9347 47.9827 28 47.9827C17.0654 47.9827 8.20105 39.1184 8.20105 28.1838C8.20105 17.2491 17.0654 8.38477 28 8.38477C38.9347 8.38477 47.799 17.2491 47.799 28.1838Z"
              fill="#0D2A28"
            />
          </g>
          <g opacity="0.9" filter="url(#filter2_i_100_436)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28 47.9827C38.9347 47.9827 47.799 39.1184 47.799 28.1838C47.799 17.2491 38.9347 8.38477 28 8.38477C17.0654 8.38477 8.20105 17.2491 8.20105 28.1838C8.20105 39.1184 17.0654 47.9827 28 47.9827Z"
              fill="#0D2A28"
            />
            <path
              d="M47.799 28.1838C47.799 39.1184 38.9347 47.9827 28 47.9827C17.0654 47.9827 8.20105 39.1184 8.20105 28.1838C8.20105 17.2491 17.0654 8.38477 28 8.38477C38.9347 8.38477 47.799 17.2491 47.799 28.1838Z"
              fill="#0D2A28"
            />
          </g>
          <g opacity="0.7" filter="url(#filter3_i_100_436)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28 47.9827C38.9347 47.9827 47.799 39.1184 47.799 28.1838C47.799 17.2491 38.9347 8.38477 28 8.38477C17.0654 8.38477 8.20105 17.2491 8.20105 28.1838C8.20105 39.1184 17.0654 47.9827 28 47.9827Z"
              fill="#0D2A28"
            />
            <path
              d="M47.799 28.1838C47.799 39.1184 38.9347 47.9827 28 47.9827C17.0654 47.9827 8.20105 39.1184 8.20105 28.1838C8.20105 17.2491 17.0654 8.38477 28 8.38477C38.9347 8.38477 47.799 17.2491 47.799 28.1838Z"
              fill="#0D2A28"
            />
          </g>
          <mask
            id="mask0_100_436"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="8"
            y="8"
            width="40"
            height="40"
          >
            <g opacity="0.7">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28 47.9827C38.9347 47.9827 47.799 39.1184 47.799 28.1838C47.799 17.2491 38.9347 8.38477 28 8.38477C17.0654 8.38477 8.20105 17.2491 8.20105 28.1838C8.20105 39.1184 17.0654 47.9827 28 47.9827Z"
                fill="#FFB34F"
                fillOpacity="0.2"
              />
              <path
                d="M47.799 28.1838C47.799 39.1184 38.9347 47.9827 28 47.9827C17.0654 47.9827 8.20105 39.1184 8.20105 28.1838C8.20105 17.2491 17.0654 8.38477 28 8.38477C38.9347 8.38477 47.799 17.2491 47.799 28.1838Z"
                fill="#FFB34F"
                fillOpacity="0.2"
              />
            </g>
          </mask>
          <g mask="url(#mask0_100_436)">
            <g opacity="0.2" filter="url(#filter4_f_100_436)">
              <path
                d="M47.799 21.2174C32.9023 15.3309 24.7246 15.5456 10.4009 21.2174V6.18487L47.799 5.08493V21.2174Z"
                fill="#0D2A28"
              />
              <path
                d="M47.799 21.2174C32.9023 15.3309 24.7246 15.5456 10.4009 21.2174V6.18487L47.799 5.08493V21.2174Z"
                stroke="#0D2A28"
                strokeWidth="0.733296"
              />
            </g>
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 47.9827C38.9347 47.9827 47.799 39.1184 47.799 28.1838C47.799 17.2491 38.9347 8.38477 28 8.38477C17.0654 8.38477 8.20105 17.2491 8.20105 28.1838C8.20105 39.1184 17.0654 47.9827 28 47.9827ZM28 46.3557C37.2262 46.3557 46.172 37.4099 46.172 28.1838C46.172 18.9576 37.2262 10.0118 28 10.0118C18.7739 10.0118 9.82805 18.9576 9.82805 28.1838C9.82805 37.4099 18.7739 46.3557 28 46.3557Z"
            fill="#0D2A28"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 14.1838C6.26801 21.9158 6.26801 34.4518 14 42.1838C21.732 49.9158 34.268 49.9158 42 42.1838C49.732 34.4518 49.732 21.9158 42 14.1838C34.268 6.45179 21.732 6.45179 14 14.1838ZM15.1505 15.3342C8.6266 21.8581 8.6266 34.5094 15.1505 41.0333C21.6743 47.5572 34.3257 47.5572 40.8495 41.0333C47.3734 34.5095 47.3734 21.8581 40.8495 15.3342C34.3257 8.81038 21.6743 8.81038 15.1505 15.3342Z"
            fill="#0D2A28"
          />
          <defs>
            <filter
              id="filter0_d_100_436"
              x="3.4346"
              y="4.71829"
              width="49.1308"
              height="49.1308"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.09994" />
              <feGaussianBlur stdDeviation="0.549972" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_100_436" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_100_436" result="shape" />
            </filter>
            <filter
              id="filter1_d_100_436"
              x="5.26787"
              y="5.45158"
              width="45.4644"
              height="45.4644"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.46659" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_100_436" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_100_436" result="shape" />
            </filter>
            <filter
              id="filter2_i_100_436"
              x="8.20105"
              y="8.38477"
              width="39.598"
              height="42.5312"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="7.69961" />
              <feGaussianBlur stdDeviation="1.46659" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.138824 0 0 0 0 0.0627451 0 0 0 0.6 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_100_436" />
            </filter>
            <filter
              id="filter3_i_100_436"
              x="7.46775"
              y="8.38477"
              width="40.3313"
              height="42.5312"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-0.733296" dy="4.03313" />
              <feGaussianBlur stdDeviation="1.46659" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.138824 0 0 0 0 0.0627451 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_100_436" />
            </filter>
            <filter
              id="filter4_f_100_436"
              x="8.56759"
              y="3.24074"
              width="41.0647"
              height="19.9828"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0.733296" result="effect1_foregroundBlur_100_436" />
            </filter>
            <radialGradient
              id="paint0_radial_100_436"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(28 28.1838) rotate(90) scale(23.4655)"
            >
              <stop offset="0.852574" stop-color="#52545A" />
              <stop offset="0.921987" stop-color="#6E6E79" />
              <stop offset="1" stop-color="#60646A" />
            </radialGradient>
          </defs>
        </svg>
      ) : (
        <svg width="64" height="64" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_100_416)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.9999 51.6492C40.9595 51.6492 51.4654 41.1434 51.4654 28.1838C51.4654 15.2241 40.9595 4.71829 27.9999 4.71829C15.0403 4.71829 4.53442 15.2241 4.53442 28.1838C4.53442 41.1434 15.0403 51.6492 27.9999 51.6492ZM27.9999 47.9827C38.9346 47.9827 47.7989 39.1184 47.7989 28.1838C47.7989 17.2491 38.9346 8.38477 27.9999 8.38477C17.0652 8.38477 8.2009 17.2491 8.2009 28.1838C8.2009 39.1184 17.0652 47.9827 27.9999 47.9827Z"
              fill="url(#paint0_radial_100_416)"
            />
          </g>
          <g filter="url(#filter1_d_100_416)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.9999 47.9827C38.9346 47.9827 47.7989 39.1184 47.7989 28.1838C47.7989 17.2491 38.9346 8.38477 27.9999 8.38477C17.0652 8.38477 8.20093 17.2491 8.20093 28.1838C8.20093 39.1184 17.0652 47.9827 27.9999 47.9827Z"
              fill="#00E7CA"
            />
            <path
              d="M47.7989 28.1838C47.7989 39.1184 38.9346 47.9827 27.9999 47.9827C17.0652 47.9827 8.20093 39.1184 8.20093 28.1838C8.20093 17.2491 17.0652 8.38477 27.9999 8.38477C38.9346 8.38477 47.7989 17.2491 47.7989 28.1838Z"
              fill="#00E7CA"
            />
          </g>
          <g opacity="0.9" filter="url(#filter2_i_100_416)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.9999 47.9827C38.9346 47.9827 47.7989 39.1184 47.7989 28.1838C47.7989 17.2491 38.9346 8.38477 27.9999 8.38477C17.0652 8.38477 8.20093 17.2491 8.20093 28.1838C8.20093 39.1184 17.0652 47.9827 27.9999 47.9827Z"
              fill="#00E7CA"
            />
            <path
              d="M47.7989 28.1838C47.7989 39.1184 38.9346 47.9827 27.9999 47.9827C17.0652 47.9827 8.20093 39.1184 8.20093 28.1838C8.20093 17.2491 17.0652 8.38477 27.9999 8.38477C38.9346 8.38477 47.7989 17.2491 47.7989 28.1838Z"
              fill="#00E7CA"
            />
          </g>
          <g opacity="0.7" filter="url(#filter3_i_100_416)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.9999 47.9827C38.9346 47.9827 47.7989 39.1184 47.7989 28.1838C47.7989 17.2491 38.9346 8.38477 27.9999 8.38477C17.0652 8.38477 8.20093 17.2491 8.20093 28.1838C8.20093 39.1184 17.0652 47.9827 27.9999 47.9827Z"
              fill="#00E7CA"
              fill-opacity="0.7"
            />
            <path
              d="M47.7989 28.1838C47.7989 39.1184 38.9346 47.9827 27.9999 47.9827C17.0652 47.9827 8.20093 39.1184 8.20093 28.1838C8.20093 17.2491 17.0652 8.38477 27.9999 8.38477C38.9346 8.38477 47.7989 17.2491 47.7989 28.1838Z"
              fill="#00E7CA"
              fill-opacity="0.7"
            />
          </g>
          <mask
            id="mask0_100_416"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="8"
            y="8"
            width="40"
            height="40"
          >
            <g opacity="0.7">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.9999 47.9827C38.9346 47.9827 47.7989 39.1184 47.7989 28.1838C47.7989 17.2491 38.9346 8.38477 27.9999 8.38477C17.0652 8.38477 8.20093 17.2491 8.20093 28.1838C8.20093 39.1184 17.0652 47.9827 27.9999 47.9827Z"
                fill="#FFB34F"
                fill-opacity="0.2"
              />
              <path
                d="M47.7989 28.1838C47.7989 39.1184 38.9346 47.9827 27.9999 47.9827C17.0652 47.9827 8.20093 39.1184 8.20093 28.1838C8.20093 17.2491 17.0652 8.38477 27.9999 8.38477C38.9346 8.38477 47.7989 17.2491 47.7989 28.1838Z"
                fill="#FFB34F"
                fill-opacity="0.2"
              />
            </g>
          </mask>
          <g mask="url(#mask0_100_416)">
            <g opacity="0.2" filter="url(#filter4_f_100_416)">
              <path
                d="M47.799 21.2174C32.9023 15.3309 24.7246 15.5456 10.4009 21.2174V6.18487L47.799 5.08493V21.2174Z"
                fill="black"
              />
              <path
                d="M47.799 21.2174C32.9023 15.3309 24.7246 15.5456 10.4009 21.2174V6.18487L47.799 5.08493V21.2174Z"
                stroke="black"
                stroke-width="0.733296"
              />
            </g>
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.9999 47.9827C38.9346 47.9827 47.7989 39.1184 47.7989 28.1838C47.7989 17.2491 38.9346 8.38477 27.9999 8.38477C17.0652 8.38477 8.20093 17.2491 8.20093 28.1838C8.20093 39.1184 17.0652 47.9827 27.9999 47.9827ZM27.9999 46.3557C37.2261 46.3557 46.1719 37.4099 46.1719 28.1838C46.1719 18.9576 37.2261 10.0118 27.9999 10.0118C18.7738 10.0118 9.82793 18.9576 9.82793 28.1838C9.82793 37.4099 18.7738 46.3557 27.9999 46.3557Z"
            fill="url(#paint1_linear_100_416)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 14.1838C6.26801 21.9158 6.26801 34.4518 14 42.1838C21.732 49.9158 34.268 49.9158 42 42.1838C49.732 34.4518 49.732 21.9158 42 14.1838C34.268 6.45179 21.732 6.45179 14 14.1838ZM15.1505 15.3342C8.6266 21.8581 8.6266 34.5094 15.1505 41.0333C21.6743 47.5572 34.3257 47.5572 40.8495 41.0333C47.3734 34.5095 47.3734 21.8581 40.8495 15.3342C34.3257 8.81038 21.6743 8.81038 15.1505 15.3342Z"
            fill="url(#paint2_linear_100_416)"
          />
          <defs>
            <filter
              id="filter0_d_100_416"
              x="3.43448"
              y="4.71829"
              width="49.1308"
              height="49.1308"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.09994" />
              <feGaussianBlur stdDeviation="0.549972" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_100_416" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_100_416" result="shape" />
            </filter>
            <filter
              id="filter1_d_100_416"
              x="5.26774"
              y="5.45158"
              width="45.4643"
              height="45.4644"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.46659" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_100_416" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_100_416" result="shape" />
            </filter>
            <filter
              id="filter2_i_100_416"
              x="8.20093"
              y="8.38477"
              width="39.5979"
              height="42.5312"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="7.69961" />
              <feGaussianBlur stdDeviation="1.46659" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.138824 0 0 0 0 0.0627451 0 0 0 0.6 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_100_416" />
            </filter>
            <filter
              id="filter3_i_100_416"
              x="7.46763"
              y="8.38477"
              width="40.3312"
              height="42.5312"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-0.733296" dy="4.03313" />
              <feGaussianBlur stdDeviation="1.46659" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.138824 0 0 0 0 0.0627451 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_100_416" />
            </filter>
            <filter
              id="filter4_f_100_416"
              x="8.56759"
              y="3.24074"
              width="41.0645"
              height="19.9828"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0.733296" result="effect1_foregroundBlur_100_416" />
            </filter>
            <radialGradient
              id="paint0_radial_100_416"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(27.9999 28.1838) rotate(90) scale(23.4655)"
            >
              <stop offset="0.852574" stop-color="#52545A" />
              <stop offset="0.921987" stop-color="#6E6E79" />
              <stop offset="1" stop-color="#60646A" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_100_416"
              x1="27.9999"
              y1="47.9827"
              x2="27.9999"
              y2="8.38477"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.624028" stop-color="#4CFFF3" />
              <stop offset="0.852574" stop-color="#5BF4EA" />
              <stop offset="0.921987" stop-color="#51F2E2" />
              <stop offset="1" stop-color="#A6FAEE" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_100_416"
              x1="14"
              y1="14.1838"
              x2="42"
              y2="42.1838"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.624028" stop-color="#4CFFF3" stop-opacity="0" />
              <stop offset="0.852574" stop-color="#5BF4D8" />
              <stop offset="0.921987" stop-color="#51F2E5" />
              <stop offset="1" stop-color="#A6FAF5" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};
