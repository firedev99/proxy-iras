import {
  AvatarMain,
  AvatarSVG,
  BlueBackground,
  HandLeft,
  HandRight,
  SVGWrapper,
} from "./styles/AvatarStyles"

type Props = {
  sex?: string
}

export default function Avatar({ sex }: Props) {
  return (
    <SVGWrapper>
      <AvatarSVG
        version="1.1"
        id="Girl"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="56 32.036 723.892 728.964"
      >
        <defs>
          <clipPath id="myClip">
            <circle cx="417.19" cy="399.737" r="351.19" />
          </clipPath>
        </defs>
        <g id="avatarbg" clipPath="url(#myClip)">
          <BlueBackground
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
            id="bluebg"
            cx="417.19"
            cy="399.737"
            r="351.19"
          />
          <AvatarMain
            initial={{ opacity: 0, y: 200 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 0.3 },
            }}
            id="avatarmain"
            clipPath="url(#myClip)"
          >
            {sex !== "Male" && (
              <>
                <path
                  id="earouter_x5F_left"
                  style={{ fill: "#EFA13F" }}
                  d="M308.331,267.77c0,0-48.79-38.779-37.81-107.822 c0,0,85.88-6.584,99.479,49.63L308.331,267.77z"
                />
                <path
                  id="earinner_x5F_left"
                  style={{ fill: "#422608" }}
                  d="M314.549,249.463c0,0-30.802-24.482-23.87-68.07
			c0,0,54.217-4.157,62.803,31.333L314.549,249.463z"
                />
                <path
                  id="earouter_x5F_right"
                  style={{ fill: "#EFA13F" }}
                  d="M538.084,264.603c0,0,44.974-38.516,32.147-103.687
			c0,0-81.767-3.263-92.724,50.583L538.084,264.603z"
                />
                <path
                  id="earinner_x5F_right"
                  style={{ fill: "#422608" }}
                  d="M528.73,248.492c0,0,28.393-24.316,20.295-65.46
			c0,0-51.621-2.06-58.538,31.934L528.73,248.492z"
                />
                <path
                  id="hairmain"
                  style={{ fill: "#FE5F55" }}
                  d="M442.07,570.132h-35.649c-55,0-100-45-100-100V281.238c0-55,45-100,100-100h35.649
			c55,0,100,45,100,100v188.893C542.07,525.132,497.07,570.132,442.07,570.132z"
                />
              </>
            )}
            <g id="face">
              <ellipse
                id="earleft"
                style={{ fill: "#F2B5AD" }}
                cx="306.421"
                cy="337.805"
                rx="13.54"
                ry="28.962"
              />

              <ellipse
                id="earright"
                transform="matrix(0.9918 0.1278 -0.1278 0.9918 47.6302 -66.7546)"
                style={{ fill: "#F2B5AD" }}
                cx="544.01"
                cy="337.788"
                rx="13.54"
                ry="28.962"
              />
              <path
                id="head_x5F_foundation"
                style={{ fill: "#FFE2D9" }}
                d="M308.601,325.182c-12.464,63.884,31.053,126.134,92.279,138.079
				s126.545-29.071,139.009-92.955s-32.648-126.445-93.874-138.391C384.79,219.971,321.065,261.298,308.601,325.182z"
              />
              <path
                id="headshadow"
                style={{ fill: "#F7BDAD" }}
                d="M539.889,360.412c-12.464,63.884-77.784,104.9-139.009,92.955
				c-52.521-10.247-92.007-57.511-94.307-111.07c-2.43,57.49,38.607,109.992,94.307,120.859
				c61.226,11.945,126.545-29.071,139.009-92.955c1.735-8.894,2.351-17.763,1.967-26.473
				C541.618,349.258,540.978,354.829,539.889,360.412z"
              />
              <g id="faceparts">
                <path
                  id="nose"
                  style={{ fill: "#FFA9A2" }}
                  d="M424.672,371.963h-0.406c-4.992,0-9.076-4.084-9.076-9.076V346.88
					c0-4.992,4.084-9.076,9.076-9.076h0.406c4.992,0,9.076,4.084,9.076,9.076v16.007
					C433.748,367.879,429.664,371.963,424.672,371.963z"
                />
                <ellipse
                  id="eyeleft"
                  style={{ fill: "#172B4D" }}
                  cx="374.051"
                  cy="341.848"
                  rx="11.782"
                  ry="14.18"
                />
                <ellipse
                  id="eyeright"
                  style={{ fill: "#172B4D" }}
                  cx="469.934"
                  cy="337.805"
                  rx="11.782"
                  ry="14.18"
                />
                <ellipse
                  id="eyebrowleft"
                  style={{ fill: sex === `Male` ? `#3a3231` : `#FE5F55` }}
                  cx="374.893"
                  cy="312.382"
                  rx="18.893"
                  ry="7.584"
                />
                <ellipse
                  id="eyebrowright"
                  style={{ fill: sex === `Male` ? `#3a3231` : `#FE5F55` }}
                  cx="465.043"
                  cy="311.57"
                  rx="18.893"
                  ry="7.584"
                />
                <path
                  id="mouth"
                  style={{ fill: "#FFFFFF" }}
                  d="M402.379,382.998h48.205c6.325,0,9.674,7.453,5.497,12.203
					c-5.107,5.807-13.897,11.508-28.737,11.536c-14.713,0.028-24.215-5.465-30.116-11.173
					C392.51,390.999,395.815,382.998,402.379,382.998z"
                />
              </g>
            </g>
            <path
              id="hairRight"
              style={{ fill: sex === `Male` ? `#3a3231` : `#FE5F55` }}
              d="M400.634,158.929c0,0-26.374,72.386,44.551,120.561s105.897,32.892,105.897,32.892
			s-2.428-111.685-43.279-134.33C466.672,155.251,400.634,158.929,400.634,158.929z"
            />
            <path
              id="hairLeft"
              style={{ fill: sex === `Male` ? `#3a3231` : `#FE5F55` }}
              d="M409.768,158.71c0,0,51.765,40.926,1.935,110.699s-116.572,49.492-116.572,49.492
			s-7.416-86.797,22.675-122.937C348.825,158.71,409.768,158.71,409.768,158.71z"
            />
            <path
              id="neck"
              style={{ fill: "#F2B5AD" }}
              d="M442.49,538.26h-36.299c-1.1,0-2-0.713-2-1.585v-72.496c0-0.872,0.9-1.585,2-1.585
			h36.299c1.1,0,2,0.713,2,1.585v72.496C444.49,537.547,443.59,538.26,442.49,538.26z"
            />
            <path
              id="handleft"
              style={{ fill: "#E8B356" }}
              d="M312.456,499.217v261.782h-73.191C239.265,760.998,226.632,496.96,312.456,499.217z"
            />
            <path
              id="handright"
              style={{ fill: "#E8B356" }}
              d="M543.996,500.91V761h73.191C617.187,760.999,629.821,498.667,543.996,500.91z"
            />
            <path
              id="body"
              style={{ fill: "#FFD275" }}
              d="M578.784,760.999l-20.855-244.956c0-12.662-9-23.022-20-23.022h-91.728l-17.648,39.084
			c-1.843,4.081-6.744,4.026-8.523-0.095l-16.838-38.99h-83.38c-11,0-20,10.36-20,23.023l-24.277,244.956"
            />
          </AvatarMain>
        </g>

        <g id="hands">
          <HandLeft
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.5, duration: 0.2 },
            }}
            id="hand_x5F_right"
            style={{ fill: "#FFE2D9" }}
            cx="253.669"
            cy="704.848"
            rx="44.4"
            ry="34.4"
          />
          <HandRight
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.2 },
            }}
            id="hand_x5F_left"
            style={{ fill: "#FFE2D9" }}
            cx="595.269"
            cy="704.848"
            rx="44.4"
            ry="34.4"
          />
        </g>
      </AvatarSVG>
    </SVGWrapper>
  )
}
