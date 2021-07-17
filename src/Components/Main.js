import React, { useEffect, useState } from "react";

export default function Main() {
  const [flag, setFlag] = useState(null);
  let everyExarray = [true, true, true];
  //Example for every method
  const everyExample = (test) => {
    return test.every((element) => element === true);
  };

  const findExarray = ["Bhanu", "Praneeth", "Ramesh"];
  const includeExarray = ["Bhanu", "Praneeth", "Ramesh"];
  //Example for find method
  const findExample = (test) => {
    return test.find((element) => element.length <= 5);
  };

  //Example for include method
  const includeExample = (test) => {
    return test.includes("Praneeth");
  };

  useEffect(() => {
    setFlag(everyExample(everyExarray));
    let found = findExample(findExarray);
    //alert(found);
    let include = includeExample(includeExarray);
    //alert(include);
  }, []);

  return (
    <div>
      <h1>Start</h1>
      <span>{JSON.stringify(flag)}</span>
    </div>
  );
}
