//---------------------------------------------------------------------------
if (!d3.getUniqueValues) {
  d3.getUniqueValues = (d) => {
    var uni = {};
    d.forEach(function (dataset, key) {
      Object.keys(dataset).forEach(function (v, key) {
        if (typeof uni[v] == "undefined") uni[v] = {};
        const prop = typeof dataset[v] == "object" ? JSON.stringify(dataset[v]) : dataset[v];
        uni[v][prop] = true;
      });
    });
    Object.keys(uni).forEach(function (cat, key) {
      uni[cat] = Object.keys(uni[cat]).sort();
    });
    return uni;
  };
} else console.error("d3.getUniqueValues already exists. This is a monkey patching problem.");

//---------------------------------------------------------------------------
if (!d3.subextent) {
  d3.subextent = (cat, data) => d3.extent(data, (d) => +d[cat]);
} else console.error("d3.subextent already exists. This is a monkey patching problem.");
//---------------------------------------------------------------------------
if (!d3.subkeys) {
  d3.subkeys = (d) => {
    var keys = [];
    Object.keys(d).forEach((k) => {
      keys = [...new Set(keys.concat(Object.keys(d[k])))];
    });
    return keys;
  };
} else console.error("d3.subkeys already exists. This is a monkey patching problem.");
//---------------------------------------------------------------------------
if (!d3.extentList) {
  d3.extentList = (data) => {
    const list = d3.subkeys(data);
    var eList = {};
    list.forEach((d) => {
      eList[d] = d3.subextent(d, data);
    });
    return eList;
  };
} else console.error("d3.extentList already exists. This is a monkey patching problem.");

//---------------------------------------------------------------------------


