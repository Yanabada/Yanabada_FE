import { Map } from "react-kakao-maps-sdk";
import Input from "./components/Input";

const Search = () => {
  return (
    <div>
      <Input />
      <Map
        center={{
          lat: 33.450701,
          lng: 126.570667
        }}
        style={{
          width: "100%",
          height: "350px"
        }}
        level={3}
      />
    </div>
  );
};

export default Search;
