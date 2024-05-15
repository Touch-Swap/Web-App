import React from "react";

export const OrcaBadge = ({ unlocked = false }: { unlocked: boolean }) => {
  return (
    <div>
      {unlocked ? (
        <svg width="95" height="116" viewBox="0 0 95 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_672_653)">
            <path
              d="M23.1113 84.5767V56.7335H72.1405V84.3334C72.1405 84.593 72.0017 84.8327 71.7766 84.9619L47.6762 98.7922C47.452 98.9208 47.1763 98.9203 46.9526 98.7909L23.473 85.2038C23.2492 85.0743 23.1113 84.8353 23.1113 84.5767Z"
              fill="#84B7C4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.3612 56.7335V93.2406L23.473 85.2038C23.2492 85.0743 23.1113 84.8353 23.1113 84.5767V56.7335H37.3612Z"
              fill="#6B9BAA"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.8789 92.9611V56.7335H37.362V93.2406L36.8789 92.9611Z"
              fill="#B0D2DD"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.8908 56.4919V92.999L71.779 84.9623C72.0028 84.8328 72.1406 84.5938 72.1406 84.3351V56.4919H57.8908Z"
              fill="#6B9BAA"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.373 92.7196V56.492H57.89V92.9991L58.373 92.7196Z"
              fill="#B0D2DD"
            />
            <g filter="url(#filter1_d_672_653)">
              <path
                d="M45.4577 15.1111L18.3031 29.8829C16.9276 30.6312 16.0713 32.0718 16.0713 33.6377L16.0713 67.4045C16.0713 68.9704 16.9275 70.4109 18.3031 71.1592L45.4577 85.931C46.7313 86.6238 48.2692 86.6238 49.5428 85.931L76.6974 71.1592C78.0729 70.4109 78.9292 68.9704 78.9292 67.4045L78.9292 33.6377C78.9292 32.0718 78.0729 30.6312 76.6974 29.8829L49.5428 15.1111C48.2692 14.4183 46.7313 14.4183 45.4577 15.1111Z"
                fill="url(#paint0_linear_672_653)"
              />
              <path
                d="M45.4279 20.6384L23.072 32.7998C21.7017 33.5452 20.8486 34.9804 20.8486 36.5404L20.8486 64.3748C20.8486 65.9348 21.7017 67.3699 23.072 68.1154L45.4279 80.2767C46.6966 80.9669 48.2288 80.9669 49.4976 80.2767L71.8534 68.1154C73.2238 67.3699 74.0768 65.9348 74.0768 64.3748L74.0768 36.5404C74.0768 34.9804 73.2238 33.5452 71.8534 32.7998L49.4976 20.6384C48.2288 19.9482 46.6966 19.9482 45.4279 20.6384Z"
                fill="url(#paint1_linear_672_653)"
              />
              <g filter="url(#filter2_f_672_653)">
                <path
                  d="M45.4279 20.6384L23.072 32.7998C21.7017 33.5452 20.8486 34.9804 20.8486 36.5404L20.8486 64.3748C20.8486 65.9348 21.7017 67.3699 23.072 68.1154L45.4279 80.2767C46.6966 80.9669 48.2288 80.9669 49.4976 80.2767L71.8534 68.1154C73.2238 67.3699 74.0768 65.9348 74.0768 64.3748L74.0768 36.5404C74.0768 34.9804 73.2238 33.5452 71.8534 32.7998L49.4976 20.6384C48.2288 19.9482 46.6966 19.9482 45.4279 20.6384Z"
                  stroke="url(#paint2_linear_672_653)"
                  strokeWidth="0.251432"
                />
              </g>
              <g opacity="0.5">
                <mask
                  id="mask0_672_653"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="23"
                  y="22"
                  width="50"
                  height="57"
                >
                  <path
                    d="M45.6917 23.0971L25.2276 34.2193C23.9234 34.9282 23.1113 36.2937 23.1113 37.7782L23.1113 63.2351C23.1113 64.7196 23.9233 66.0851 25.2276 66.794L45.6917 77.9162C46.8978 78.5718 48.354 78.5718 49.5602 77.9162L70.0242 66.794C71.3285 66.0851 72.1405 64.7196 72.1405 63.2351L72.1405 37.7782C72.1405 36.2937 71.3285 34.9282 70.0242 34.2193L49.5602 23.0971C48.354 22.4415 46.8978 22.4415 45.6917 23.0971Z"
                    fill="#A6D3DE"
                  />
                </mask>
                <g mask="url(#mask0_672_653)">
                  <path
                    d="M45.6917 23.0971L25.2276 34.2193C23.9234 34.9282 23.1113 36.2937 23.1113 37.7782L23.1113 63.2351C23.1113 64.7196 23.9233 66.0851 25.2276 66.794L45.6917 77.9162C46.8978 78.5718 48.354 78.5718 49.5602 77.9162L70.0242 66.794C71.3285 66.0851 72.1405 64.7196 72.1405 63.2351L72.1405 37.7782C72.1405 36.2937 71.3285 34.9282 70.0242 34.2193L49.5602 23.0971C48.354 22.4415 46.8978 22.4415 45.6917 23.0971Z"
                    fill="url(#paint3_radial_672_653)"
                  />
                  <g filter="url(#filter3_i_672_653)">
                    <path
                      d="M45.6917 23.0971L25.2276 34.2193C23.9234 34.9282 23.1113 36.2937 23.1113 37.7782L23.1113 63.2351C23.1113 64.7196 23.9233 66.0851 25.2276 66.794L45.6917 77.9162C46.8978 78.5718 48.354 78.5718 49.5602 77.9162L70.0242 66.794C71.3285 66.0851 72.1405 64.7196 72.1405 63.2351L72.1405 37.7782C72.1405 36.2937 71.3285 34.9282 70.0242 34.2193L49.5602 23.0971C48.354 22.4415 46.8978 22.4415 45.6917 23.0971Z"
                      fill="#AFF5F1"
                      fillOpacity="0.03"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_dd_672_653"
              x="0.684565"
              y="0.230579"
              width="93.6318"
              height="115.07"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.56445" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.558594 0 0 0 0 0.869297 0 0 0 0 0.9375 0 0 0 0.04 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_672_653" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.02578" />
              <feGaussianBlur stdDeviation="7.69336" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.670833 0 0 0 0 1 0 0 0 0 0.94075 0 0 0 0.33 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_672_653" result="effect2_dropShadow_672_653" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_672_653" result="shape" />
            </filter>
            <filter
              id="filter1_d_672_653"
              x="14.5627"
              y="14.5915"
              width="65.8756"
              height="75.3792"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2.01145" />
              <feGaussianBlur stdDeviation="0.754295" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.208958 0 0 0 0 0.389892 0 0 0 0 0.491667 0 0 0 0.54 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_672_653" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_672_653" result="shape" />
            </filter>
            <filter
              id="filter2_f_672_653"
              x="20.6472"
              y="19.9196"
              width="53.6304"
              height="61.0759"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0.0377148" result="effect1_foregroundBlur_672_653" />
            </filter>
            <filter
              id="filter3_i_672_653"
              x="23.1113"
              y="22.6054"
              width="49.0293"
              height="55.8025"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.69066" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.37849 0 0 0 0 0.586923 0 0 0 0 0.704167 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_672_653" />
            </filter>
            <linearGradient
              id="paint0_linear_672_653"
              x1="34.3001"
              y1="22.8001"
              x2="62.5861"
              y2="78.9951"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D8ECF1" />
              <stop offset="1" stopColor="#82B3BF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_672_653"
              x1="34.0488"
              y1="27.4516"
              x2="58.4377"
              y2="72.4579"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A1C9D3" />
              <stop offset="1" stopColor="#D0ECF2" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_672_653"
              x1="36.6888"
              y1="25.8173"
              x2="62.9634"
              y2="73.0864"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D0ECF2" />
              <stop offset="1" stopColor="#E6F8FC" />
            </linearGradient>
            <radialGradient
              id="paint3_radial_672_653"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(47.6259 50.5066) rotate(90) scale(28.4608 24.5146)"
            >
              <stop stopColor="#D0EBF2" />
              <stop offset="1" stopColor="#8DD3E2" />
            </radialGradient>
          </defs>
        </svg>
      ) : (
        <svg width="85" height="147" viewBox="0 0 85 147" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="42.5" cy="42.5" r="42.5" fill="url(#paint0_linear_457_7451)" />
          <g filter="url(#filter0_i_457_7451)">
            <circle cx="42.5" cy="42.5" r="27.625" fill="url(#paint1_radial_457_7451)" />
            <circle
              cx="42.5"
              cy="42.5"
              r="27.625"
              fill="url(#paint2_linear_457_7451)"
              fillOpacity="0.2"
              style={{ mixBlendMode: "multiply" }}
            />
          </g>
          <circle cx="42.5" cy="42.5" r="30.2812" stroke="url(#paint3_linear_457_7451)" strokeWidth="5.3125" />
          <g style={{ mixBlendMode: "overlay" }} opacity="0.25">
            <circle cx="42.5" cy="42.5" r="33.2031" stroke="white" strokeWidth="0.53125" />
          </g>
          <path
            d="M17.6487 108V98.8403H21.2161C23.0125 98.8403 24.2566 100.046 24.2566 101.843V101.855C24.2566 103.646 23.0125 104.871 21.2161 104.871H19.0706V108H17.6487ZM20.8606 100.04H19.0706V103.677H20.8606C22.0921 103.677 22.8093 103.011 22.8093 101.862V101.849C22.8093 100.707 22.0921 100.04 20.8606 100.04ZM25.5879 108V98.4023H26.9653V108H25.5879ZM30.4992 108.114C29.1852 108.114 28.2141 107.314 28.2141 106.064V106.051C28.2141 104.82 29.1408 104.103 30.7849 104.001L32.6511 103.893V103.284C32.6511 102.528 32.175 102.109 31.2419 102.109C30.4802 102.109 29.9787 102.389 29.8137 102.877L29.8073 102.903H28.4807L28.487 102.858C28.652 101.729 29.7375 100.973 31.3054 100.973C33.0383 100.973 34.0158 101.836 34.0158 103.284V108H32.6511V107.022H32.5432C32.1369 107.721 31.4133 108.114 30.4992 108.114ZM29.5851 106.007C29.5851 106.642 30.1247 107.016 30.8674 107.016C31.8957 107.016 32.6511 106.343 32.6511 105.455V104.864L30.9689 104.972C30.0168 105.029 29.5851 105.372 29.5851 105.994V106.007ZM35.5502 108V101.106H36.9276V102.154H37.0292C37.3656 101.417 38.0258 100.973 39.0287 100.973C40.5712 100.973 41.4218 101.894 41.4218 103.538V108H40.0507V103.861C40.0507 102.719 39.5746 102.154 38.5653 102.154C37.5561 102.154 36.9276 102.846 36.9276 103.957V108H35.5502ZM43.0006 108V98.4023H44.378V104.014H44.4796L47.2154 101.106H48.8277L45.9522 104.014L49.0182 108H47.3424L44.9684 104.902L44.378 105.493V108H43.0006ZM52.4188 108.044C50.9017 108.044 50.2796 107.511 50.2796 106.185V102.192H49.2005V101.106H50.2796V99.3672H51.6824V101.106H53.1614V102.192H51.6824V105.854C51.6824 106.597 51.9617 106.902 52.6409 106.902C52.8504 106.902 52.971 106.896 53.1614 106.876V107.975C52.9393 108.013 52.6854 108.044 52.4188 108.044ZM57.2031 108.133C55.1782 108.133 53.9405 106.781 53.9405 104.56V104.547C53.9405 102.332 55.1846 100.973 57.2031 100.973C59.2154 100.973 60.4595 102.325 60.4595 104.547V104.56C60.4595 106.781 59.2217 108.133 57.2031 108.133ZM57.2031 106.984C58.3838 106.984 59.0567 106.083 59.0567 104.56V104.547C59.0567 103.017 58.3838 102.122 57.2031 102.122C56.0161 102.122 55.3496 103.017 55.3496 104.547V104.56C55.3496 106.089 56.0161 106.984 57.2031 106.984ZM61.6955 108V101.106H63.073V102.154H63.1745C63.511 101.417 64.1711 100.973 65.174 100.973C66.7165 100.973 67.5671 101.894 67.5671 103.538V108H66.196V103.861C66.196 102.719 65.7199 102.154 64.7107 102.154C63.7014 102.154 63.073 102.846 63.073 103.957V108H61.6955Z"
            fill="white"
          />
          <path
            d="M16.9855 131.205C14.6359 131.205 13.1711 129.506 13.1711 126.781V126.77C13.1711 124.039 14.63 122.34 16.9797 122.34C18.8429 122.34 20.2726 123.518 20.4953 125.199L20.4894 125.229H19.1886V125.211C18.9425 124.174 18.0929 123.5 16.9797 123.5C15.4621 123.5 14.5129 124.76 14.5129 126.77V126.781C14.5129 128.785 15.4621 130.045 16.9855 130.045C18.1047 130.045 18.9425 129.447 19.1828 128.492L19.1945 128.469H20.4953V128.504C20.2492 130.127 18.8722 131.205 16.9855 131.205ZM24.3646 131.123C22.4955 131.123 21.3529 129.875 21.3529 127.824V127.812C21.3529 125.768 22.5013 124.514 24.3646 124.514C26.222 124.514 27.3705 125.762 27.3705 127.812V127.824C27.3705 129.875 26.2279 131.123 24.3646 131.123ZM24.3646 130.062C25.4545 130.062 26.0756 129.23 26.0756 127.824V127.812C26.0756 126.4 25.4545 125.574 24.3646 125.574C23.2689 125.574 22.6537 126.4 22.6537 127.812V127.824C22.6537 129.236 23.2689 130.062 24.3646 130.062ZM28.4801 131V124.637H29.7515V125.615H29.8453C30.1265 124.918 30.7476 124.514 31.5797 124.514C32.4469 124.514 33.0621 124.965 33.3433 125.65H33.443C33.7652 124.965 34.4976 124.514 35.3824 124.514C36.6656 124.514 37.4156 125.287 37.4156 126.611V131H36.15V126.916C36.15 126.037 35.7515 125.604 34.9195 125.604C34.1109 125.604 33.5777 126.207 33.5777 126.975V131H32.3121V126.787C32.3121 126.061 31.8375 125.604 31.0875 125.604C30.3199 125.604 29.7515 126.26 29.7515 127.092V131H28.4801ZM38.783 133.121V124.637H40.0545V125.639H40.1482C40.5174 124.941 41.2146 124.525 42.1053 124.525C43.7107 124.525 44.742 125.809 44.742 127.812V127.824C44.742 129.84 43.7225 131.105 42.1053 131.105C41.2322 131.105 40.4881 130.678 40.1482 129.992H40.0545V133.121H38.783ZM41.7478 130.021C42.8084 130.021 43.4471 129.189 43.4471 127.824V127.812C43.4471 126.441 42.8084 125.615 41.7478 125.615C40.6873 125.615 40.031 126.453 40.031 127.812V127.824C40.031 129.184 40.6873 130.021 41.7478 130.021ZM45.9219 131V122.141H47.1934V131H45.9219ZM51.3498 131.123C49.4865 131.123 48.3615 129.852 48.3615 127.836V127.83C48.3615 125.844 49.51 124.514 51.2854 124.514C53.0607 124.514 54.1506 125.797 54.1506 127.707V128.152H49.6389C49.6623 129.371 50.3303 130.08 51.3791 130.08C52.1936 130.08 52.6799 129.676 52.8322 129.348L52.8557 129.301L54.0803 129.295L54.0686 129.348C53.8576 130.186 52.9787 131.123 51.3498 131.123ZM51.2912 125.557C50.424 125.557 49.7678 126.148 49.6565 127.244H52.8908C52.7912 126.107 52.1525 125.557 51.2912 125.557ZM57.6567 131.041C56.2563 131.041 55.682 130.549 55.682 129.324V125.639H54.686V124.637H55.682V123.031H56.977V124.637H58.3422V125.639H56.977V129.02C56.977 129.705 57.2348 129.986 57.8617 129.986C58.0551 129.986 58.1664 129.98 58.3422 129.963V130.977C58.1371 131.012 57.9028 131.041 57.6567 131.041ZM62.0182 131.123C60.1549 131.123 59.0299 129.852 59.0299 127.836V127.83C59.0299 125.844 60.1783 124.514 61.9537 124.514C63.7291 124.514 64.819 125.797 64.819 127.707V128.152H60.3073C60.3307 129.371 60.9987 130.08 62.0475 130.08C62.8619 130.08 63.3483 129.676 63.5006 129.348L63.524 129.301L64.7487 129.295L64.7369 129.348C64.526 130.186 63.6471 131.123 62.0182 131.123ZM61.9596 125.557C61.0924 125.557 60.4362 126.148 60.3248 127.244H63.5592C63.4596 126.107 62.8209 125.557 61.9596 125.557ZM68.243 131.105C66.6434 131.105 65.6063 129.822 65.6063 127.824V127.812C65.6063 125.797 66.6258 124.525 68.243 124.525C69.116 124.525 69.8602 124.959 70.2 125.645H70.2996V122.141H71.5653V131H70.2996V129.998H70.2C69.8309 130.695 69.1336 131.105 68.243 131.105ZM68.6063 130.021C69.6668 130.021 70.3172 129.184 70.3172 127.824V127.812C70.3172 126.453 69.661 125.615 68.6063 125.615C67.5399 125.615 66.9012 126.447 66.9012 127.812V127.824C66.9012 129.189 67.5399 130.021 68.6063 130.021Z"
            fill="#B0AEB5"
          />
          <rect x="10" y="144" width="65" height="3" rx="1.5" fill="#FEFEFE" />
          <rect x="10" y="144" width="65" height="3" rx="1.5" fill="#EAAD65" />
          <defs>
            <filter
              id="filter0_i_457_7451"
              x="9.5625"
              y="9.5625"
              width="65.875"
              height="65.875"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="11.9531" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.358333 0 0 0 0 0.0840788 0 0 0 0 0.0627083 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_457_7451" />
            </filter>
            <linearGradient
              id="paint0_linear_457_7451"
              x1="42.5"
              y1="0"
              x2="42.5"
              y2="85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#524234" />
              <stop offset="1" stopColor="#715041" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_457_7451"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(42.5 42.5) rotate(90) scale(43.0313)"
            >
              <stop stopColor="#4C392D" />
              <stop offset="1" stopColor="#452D1F" />
            </radialGradient>
            <linearGradient
              id="paint2_linear_457_7451"
              x1="42.5"
              y1="14.875"
              x2="42.5"
              y2="70.125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_457_7451"
              x1="42.5"
              y1="14.875"
              x2="42.5"
              y2="70.125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#463111" />
              <stop offset="1" stopColor="#564936" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};
