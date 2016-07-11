export class SnapshotMock<T> implements kebakaran.ISnapshot<T> {

  private value: T;
  private _key: string;

  constructor(key: string, value: T) {
    this._key = key;
    this.value = value;
  }

  public val(): T {
    return this.value;
  }

  public key(): string {
    return this._key;
  }

}