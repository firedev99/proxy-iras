import { Noto_Sans_Display, Noto_Sans_Mono } from "next/font/google"

const CustomFontRegular_01 = Noto_Sans_Display({
  weight: ["400"],
})

const CustomFontRegular_02 = Noto_Sans_Mono({
  weight: ["400"],
})

const CustomFontMedium_01 = Noto_Sans_Display({
  weight: ["500"],
})

const CustomFontMedium_02 = Noto_Sans_Mono({
  weight: ["500"],
})

const CustomFontBold_01 = Noto_Sans_Display({
  weight: ["800"],
})

const CustomFontBold_02 = Noto_Sans_Mono({
  weight: ["800"],
})

const CustomFontExtraBold_01 = Noto_Sans_Display({
  weight: ["900"],
})

const CustomFontExtraBold_02 = Noto_Sans_Mono({
  weight: ["900"],
})

export const fonts = {
  font01_regular: CustomFontRegular_01,
  font01_medium: CustomFontMedium_01,
  font01_bold: CustomFontBold_01,
  font01_extra_bold: CustomFontExtraBold_01,
  font02_regular: CustomFontRegular_02,
  font02_medium: CustomFontMedium_02,
  font02_bold: CustomFontBold_02,
  font02_extra_bold: CustomFontExtraBold_02,
}
