import EventEmitter from 'events';

import pify from 'pify';
import isTrademarked from 'is-trademarked';

import _whoami  from 'npm-whoami';
import _authorPackages  from  'npm-list-author-packages';

const whoami = pify(_whoami);
const authorPackages = pify(_authorPackages);

class Canibekikked extends EventEmitter {

  constructor(user) {
    super();
    this.user = user;
  }

  initState() {
    Object.assign(this, {
      failed: [],
      passed: 0,
      exceptions: 0
    });
  }

  _fireEnd() {
    this.emit(
      'end',
      this.passed,
      this.failed,
      this.exceptions
    );
  }

  async start() {
    this.initState();

    const username = this.user || await whoami();
    const packages = await authorPackages({ username });

    await Promise.all(packages.map(
      p => this.checkPackage(p)
    ));

    this._fireEnd();
  }

  async checkPackage(name) {
    this.emit('package-checking', { name });
    let trademarks = null;

    try {
      trademarks = await isTrademarked(name);
    } catch (err) {
      this.emit('error', err);
      this.exceptions++;
    }

    if (trademarks) {
      this.failed.push({ name, trademarks });
    } else {
      this.passed++;
    }

    this.emit('package-checked', { name, trademarks });
  }
}

export default function canibekikked(user) {
  return new Canibekikked(user);
}
