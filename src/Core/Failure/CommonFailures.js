import Failure from "./Failure.js";

class CommonFailure extends Failure {
  constructor({ detail }) {
    super();
    this.detail = detail;
  }
}

export default CommonFailure;
