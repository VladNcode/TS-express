let a: number = 5;
let b: string = 'hello';

let c: number = a + Number(b);

let d: boolean = true;

let names: string[] = ['Vlad', 'Vika'];
let ages: number[] = [10, 5];

let tupple: [number, string] = [10, 'str'];

let e: any = 3;
e = 'string';
e = null;
e = [];

let anyArr: any[] = ['string', 10, null, undefined, true];

function greet(name: string): string {
  return `Hello, ${name}!`;
}

names.map((el: string) => el);

function coord(coord: { lat: number; lon?: number }) {}

let universalId: string | number = 'string';
universalId = 5;

function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function helloUser(user: string | string[]) {
  if (Array.isArray(user)) {
    user.forEach(user => console.log(user));
  } else {
    console.log(`Hello ${user}`);
  }
}

type coord = { lat: number; lon: number };

interface Icoord {
  lat: number;
  lon: number;
}

type ID = number | string;
type myString = string;

function compute(coord: coord) {}
function compute2(coord: Icoord) {}
function compute3(coord: ID) {}

interface Animal {
  name: string;
}

interface Dog extends Animal {
  tail?: boolean;
}

const dog: Dog = {
  name: 'Spark',
};

type AnimalType = {
  name: string;
};

type DogType = Animal & { tail: boolean };

const dogTyper: Dog = {
  name: 'Spark Type',
  tail: true,
};

interface Cat {
  name: string;
}

interface Cat {
  tail: boolean;
}

const cat: Cat = {
  name: 'Fira',
  tail: true,
};

const n = 'asddasdas';

let m: 'hi' = 'hi';

type direction = 'left' | 'right';

function moveDog(direction: direction): -1 | 0 | 1 {
  switch (direction) {
    case 'left':
      return -1;
    case 'right':
      return 1;
    default:
      return 0;
  }
}

moveDog('right');

interface Iconnection {
  host: string;
  port: number;
}

function connect(connection: Iconnection | 'default') {}

connect('default');

const req = {
  host: 'localhost',
  protocol: 'https' as 'https',
};

let q: any = 5;
let w = q as number;

function conn(host: string, protocol: 'http' | 'https') {}

conn(req.host, req.protocol);
