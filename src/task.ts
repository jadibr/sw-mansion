export function task(arrayA: number[], arrayB: number[]): number[] {

  const frequenciesInB: Map<number, FrequencyInfo> = new Map<number, FrequencyInfo>()

  for (const value of arrayB) {
    if (!Number.isInteger(value)) { // param validation here since already looping through the array
      throw new TypeError(`Value ${value} (from second array) is not an integer`)
    }
    const matchingFreq = frequenciesInB.get(value)
    if (matchingFreq == null) {
      frequenciesInB.set(value, new FrequencyInfo())
    } else {
      matchingFreq.incrementCount()
    }
  }

  const result: number[] = []

  for (const elementA of arrayA) {
    if (!Number.isInteger(elementA)) { // param validation here since already looping through the array
      throw new TypeError(`Value ${elementA} (from first array) is not an integer`)
    }

    const matchingFreq = frequenciesInB.get(elementA)

    if (matchingFreq == null) {
      result.push(elementA)
    } else {
      if (matchingFreq.isPrime == null) {
        matchingFreq.isPrime = isPrime(matchingFreq.frequencyCount)
      }
      if (matchingFreq.isPrime == false) {
        result.push(elementA)
      }
    }

  }
  return result
}

// source: https://en.wikipedia.org/wiki/Primality_test
export function isPrime(value: number): boolean {

  // a prime is a natural number by definition all of which are integers
  // therefore any non-integer cannot be a prime number
  // added it for completion and to make it possible to re-use this method in the future
  if (!Number.isInteger(value)) {
    throw new TypeError(`Value ${value} is not an integer`)
  }

  if (value == 2 || value == 3)
    return true
  if (value <= 1 || value % 2 == 0 || value % 3 == 0)
    return false
  for (let i = 5; i * i <= value ; i+=6) {
    if (value % i == 0 || value % (i + 2) == 0)
      return false
  }
  return true

}

class FrequencyInfo {

  private _frequencyCount: number
  private _isPrime: boolean | undefined

  constructor() {
    this._frequencyCount = 1
    this._isPrime = undefined
  }

  public get frequencyCount(): number {
    return this._frequencyCount
  }

  public incrementCount(): number {
    return ++this._frequencyCount
  }

  public get isPrime() : boolean | undefined {
    return this._isPrime
  }
  
  public set isPrime(v: boolean) {
    this._isPrime = v
  }
  
}