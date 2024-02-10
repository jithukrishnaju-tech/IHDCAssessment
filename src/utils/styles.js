const styles = {
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[36px] text-[#61baf5] xs:leading-[76.8px] leading-[66.8px] mb-4",
  flexCenter: "flex justify-center items-center",
  paddingY: "sm:py-16 py-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionInfo: `flex-1 ${styles.flexCenter}  flex-col`,
};

export default styles;
