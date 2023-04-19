import useWindowSize from "./use-window-size";

export enum ScreenSize {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

const useResponsiveDimension = () => {
  const { width } = useWindowSize();

  if (width < 600) {
    return ScreenSize.MOBILE;
  }

  if (width < 1000) {
    return ScreenSize.TABLET;
  }

  return ScreenSize.DESKTOP;
};

export default useResponsiveDimension;
