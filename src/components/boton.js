import { TouchableOpacity } from "react-native";
import TextWhite from "./textWhite";

export default Boton = ({ onPres }) => {
  return (
    <TouchableOpacity onPress={onPres}>
      <TextWhite texto="Detalles"></TextWhite>
    </TouchableOpacity>
  );
};
