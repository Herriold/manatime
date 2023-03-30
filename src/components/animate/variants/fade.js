import { varTranEnter, varTranExit } from "./transition";

export const varFade = (props) => {
  const distance = props?.distance || 120;
  const durationIn = props?.durationIn;
  const durationOut = props?.durationOut;
  const easeIn = props?.easeIn;
  const easeOut = props?.easeOut;

  return {
    inLeft: {
      initial: { x: -distance, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        x: -distance,
        opacity: 0,
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
  };
};
