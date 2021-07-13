# test_frontend

Technical test development for Frontend Developer

## Exercise 1

Create a script (javascript / nodejs) that receives a range between A and B and from this range the prime numbers are displayed on the screen.

#### primeNumbers.js

```javascript
// Verify is prime number
const isPrime = (num) => {
 		if (num < 2) return false;
  		for (var i = 2; i < num; i++) {
  			 if (num % i == 0) return false;
  		}
 		return true;
};

// Prime numbers in a specific range
function getPrimeNumbersBetween(from, to) {
 	primeNumbers = []
	 if (Number.isInteger(from) && Number.isInteger(to)) {
		if (to > from) {
			for (let i = from; i <= to; i++) {
				if (isPrime(i)){ 
					primeNumbers.push(i)};
				}
			} else {
			 getPrimeNumbersBetween(to, from);
			}
		 }
	return primeNumbers
}
```

#### primeNumbers.test.js

```javascript
import getPrimeNumbersBetween from "./primeNumbers";
// const primeNumbers = require("./primeNumbers");

describe("getPrimeNumbersBetween", () => {
    test("when it is from 0 to 12", () => {
        const expected = [2,3,5,7,11];
        const result = getPrimeNumbersBetween(0,12);
        expect(expected).toStrictEqual(result);
    });

    test("when it is from 6 to 20", () => {
        const expected = [7,11,13,17,19];
        const result = getPrimeNumbersBetween(6,20);
        expect(expected).toStrictEqual(result);
    });

    test("when it is from 0 to 1", () => {
        const expected = [];
        const result = getPrimeNumbersBetween(0,1);
        expect(expected).toStrictEqual(result);
    });

    test("when it is from -10 to 5", () => {
        const expected = [2,3,5];
        const result = getPrimeNumbersBetween(-10,5);
        expect(expected).toStrictEqual(result);
    });

    test("when it is from 12 to 4", () => {
        const expected = [5,7,11];
        const result = getPrimeNumbersBetween(12,4);
        expect(expected).toStrictEqual(result);
    });

    test("when only one parameter is entered", () => {
        const expected = [];
        const result = getPrimeNumbersBetween(19);
        expect(expected).toStrictEqual(result);
    });

    test("when a string is entered at least in one parameter", () => {
        const expected = [];
        const result = getPrimeNumbersBetween("letters",4);
        expect(expected).toStrictEqual(result);
    });

    test("when a string is entered at least in one parameter", () => {
        const expected = [];
        const result = getPrimeNumbersBetween(-5,"letters");
        expect(expected).toStrictEqual(result);
    });

    test("when are strins", () => {
        const expected = [];
        const result = getPrimeNumbersBetween("letters","letters");
        expect(expected).toStrictEqual(result);
    });
});
```

#### Test verification

![image](https://user-images.githubusercontent.com/49970548/125444427-eb8881b8-a875-4041-b039-ae98ddbc856f.png)


## Exercise 2

Given the following json:

#### Data

```javascript
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
```

A script must be generated that with these inputs generates the following result:

#### Target result

```javascript
let result = {
    BUIN: {
        limit: 1,
        over: {
            carrier: "CHP",
            service: "express",
        },
        under: {
            carrier: "CHP",
            service: "express",
        }
    },
    LAJA: {
        limit: 1,
        over: {
            carrier: "CCH",
            service: "DEX",
        },
        under: {
             carrier: "CCH",
            service: "DEX",
        }
    },
    LEBU: {
        limit: 1,
        over: {
            carrier: "CCH",
            service: "DEX",
        },
        under: {
             carrier: "CCH",
            service: "DEX",
        }
    },
    LOTA: {
        limit: 1,
        over: {
            carrier: "CHP",
            service: "express",
        },
        under: {
            carrier: "CHP",
            service: "express",
        }
    }
}
```

The script must be written in javascript (you can use libraries / frameworks that help you with the manipulation of the jsons), the deliverable can be a script per terminal or a simple web.

#### Solution

```javascript
function getResult() {
  let result = new Object();
  for (var pos in json.data) {
    let id = json.data[pos].over_carrier_service_id;
    result[pos] = { limit: json.data[pos].limit, over: values[id] };
  }
  return result;
}

const result = getResult();
```

The next challenge will test your skills as a frontend, the challenge consists of building a responsive web interface of Marvel superheroes.
In the evaluation we will consider usability and consistency in design.

API
In order to use the API, you must go to https://developer.marvel.com/ section Get a key, complete the registration form and the API-KEY menu. After obtaining the public and private key, check the way to authenticate in the following link to be able to access the resources and the character endpoint.

#### Desktop view

![image](https://user-images.githubusercontent.com/49970548/125445803-8440d4c4-070b-4f49-a8f4-c0eced20ec1b.png)

![image](https://user-images.githubusercontent.com/49970548/125446243-bc0814ee-3eec-4521-9ccf-48d43effe54a.png)

![image](https://user-images.githubusercontent.com/49970548/125446277-d229f029-3818-4db2-8fb2-b875ba71cad0.png)

![image](https://user-images.githubusercontent.com/49970548/125446310-205ed889-4ec5-4170-b990-2073c0f3753b.png)


#### Tablet view

![image](https://user-images.githubusercontent.com/49970548/125446076-98aac198-6c29-4095-b3e3-77974834afed.png)

![image](https://user-images.githubusercontent.com/49970548/125446358-46e3d906-6f23-4479-985c-1074e802cefe.png)

![image](https://user-images.githubusercontent.com/49970548/125446417-228dc296-995c-443f-98c6-511821a9d6d4.png)

![image](https://user-images.githubusercontent.com/49970548/125446682-f8310060-9e9d-43c2-b695-0d29f9f8eef2.png)


#### Mobile view

![image](https://user-images.githubusercontent.com/49970548/125447686-b63a0ac8-3aba-42dd-9705-fe5139bf79f7.png)

![image](https://user-images.githubusercontent.com/49970548/125447603-d566d25e-92ee-4b21-afcc-c6d5d4918c14.png)

![image](https://user-images.githubusercontent.com/49970548/125447437-1f63afe4-b40f-4a58-9d56-96183b5fc121.png)

![image](https://user-images.githubusercontent.com/49970548/125447526-0e6aa01a-705d-4d8f-97fe-9a922ba4cddb.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
