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

// Enum

// enum Direction {
//   Left = 'left'.length,
//   Right = 1,
// }

enum Direction {
  Left,
  Right,
}

Direction.Left;

function moveD(direction: Direction) {
  switch (direction) {
    case Direction.Left:
      return -1;
    case Direction.Right:
      return 1;
  }
}

function objMod(obj: { Left: number }) {}

objMod(Direction);

const enum Direction2 {
  Up,
  Down,
}

let myDirection = Direction2.Up;

//Generics

interface HasLength {
  length: number;
}

function log<T extends HasLength, K>(obj: T, arr: K[]): K[] {
  obj.length;
  console.log(obj);
  return arr;
}

log<string, number>('asd', [1, 2, 3]);

interface Iuser {
  name: string;
  age?: number;
  bid: <T>(sum: T) => boolean;
}

function bid<T>(sum: T): boolean {
  return true;
}

// Classes

class CoordClass {
  message = '1';
  lat: number;
  long: number;

  protected test() {
    if (this.lat > 0) {
    }
  }

  computeDistance(lat: number, lon: number): number {
    return 0;
  }

  constructor(lat: number, long: number) {
    this.lat = lat;
    this.long = long;
    console.log(this.message);
  }
}

const point = new CoordClass(0, 1);

class MapLocation extends CoordClass {
  message = '2';
  private _name: string;
  #a: bigint;

  get name(): string {
    return this._name;
  }

  set name(s: string) {
    this._name = s + '_cool';
  }

  override computeDistance(lat: number, lon: number): number {
    console.log(this._name);
    this.test();
    return 0;
  }

  constructor(lat: number, long: number, name: string) {
    super(lat, long);
  }
}

const loc = new MapLocation(0, 1, 'sad');

// loc.test

interface LoggerService {
  log: (s: string) => void;
}

class Logger implements LoggerService {
  public log(s: string): void {
    console.log(s);
  }
  private error() {}

  private a = 'asddasdas';
}

const l = new Logger();
l.log('d');
// l.error();

class MyClass<T> {
  a: T;
}

const j = new MyClass<string>();
j.a;

abstract class Base {
  print(s: string): void {
    console.log(s);
  }

  abstract error(s: string): void;
}

class BaseExtended extends Base {
  error(s: string): void {}
}

new BaseExtended().print('as');

class Animalistic {
  name: string;
}

class Lion {
  name: string;
  tail: boolean;
}

const simba: Animal = new Lion();

// Other types
let aa = 'Hello';

if (typeof aa === 'string') {
}

let bb: typeof aa;

type CoordType = {
  lat: number;
  lon: number;
};

type P = keyof CoordType;

let x: P = 'lat';

function loog(a: string | null): void {
  // if (a === null) {
  // } else {
  //   a.toLowerCase();
  // }

  a!.toLowerCase();
}

const aaa: bigint = BigInt(100);
const bbb: symbol = Symbol('sasdasdasd');
const ccc: symbol = Symbol('sasdasdasd');
