(function () {
  const dict = {
    3: "three",
    2: {
      4: "four",
      5: { 6: "six" },
    },
    7: { 8: "eight" },
  };

  function flattenDict(d) {
    const result = {};

    function flatten(current, prefix) {
      for (const key in current) {
        // const value = current[key];
        // const newKey = prefix ? `${prefix}.${key}` : key;
        // if (typeof value === 'object' && value !== null) {
        //     flatten(value, newKey);
        // } else {
        //     result[newKey] = value;
        // }

        console.log(key, prefix);

        const value = current[key];
        const newKey= prefix ? `${prefix}.${key}` : key;

        if(typeof value != 'object' || value === null || value === unde)fined){
            result[newKey] = value;
        } else {
            flatten(value, newKey); 
      }
    }

    flatten(d, "");
    return result;
  }

  console.log(flattenDict(dict));
})();
