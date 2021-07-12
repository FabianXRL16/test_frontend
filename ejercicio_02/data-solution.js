// JSON
let values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};
// JSON
let json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
  },
};


function getResult () {
  let result = {};
    for (var name in json.data) {
        let key = json.data[name].over_carrier_service_id;
        let value = [values[key].carrier, values[key].service];
        json.data[name].over_carrier_service_id = value;

        key = json.data[name].under_carrier_service_id;
        value = [values[key].carrier, values[key].service];
        json.data[name].under_carrier_service_id = value;
    }
 return result
}

getResult()
