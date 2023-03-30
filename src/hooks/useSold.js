import { useContext } from "react";
import { SoldContext } from "src/context/SoldContext";

const useSold = () => useContext(SoldContext);

export default useSold;
