import * as Immutable from 'immutable';
import { Emitter } from './Emitter';

export class Equal<V> extends Emitter<V> {

  private _ref: kebakaran.IRef<V>;
  private _immutableData: any;
  private _hasData: boolean = false;

  constructor(ref: kebakaran.IRef<V>) {
    super();
    this._ref = ref;
  }

  protected hasData(): boolean {
    return this._hasData;
  }

  protected subscribe(): void {
    this._ref.on('value', this.onData, this);
  }

  protected close(): void {
    this._ref.off('value', this.onData, this);
  }

  private onData(value: V) {
    const newImmutableValue = Immutable.fromJS(value);

    if (!Immutable.is(newImmutableValue, this._immutableData)) {
      this._immutableData = newImmutableValue;
      this._data = value;
      this._hasData = true;
      this.emit();
    }
  }

}