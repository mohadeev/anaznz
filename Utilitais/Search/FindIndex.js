export let SearshedItem = "";
export const FindIndex = (data) => {
  const Split = data.split("");
  let NewArray = Split.splice(13, Split.length);
  let index = NewArray.indexOf("%");
  const Map = () => {
    if (index >= 0) {
      const datata = NewArray.splice(index, 3, " ");
      index = NewArray.indexOf("%");
      SearshedItem = NewArray.join("");
      console.log(SearshedItem);
    }
  };

  const filtert = NewArray.filter((item) => item === "%");
  const JoinFilter = filtert.join("");
  const SplitFilter = JoinFilter.split("");
    const Fuc =()=>{
        SplitFilter.map((item)=>{
          Map();
        })
    }
  Fuc()
};
