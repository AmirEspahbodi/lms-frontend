import Failure from "./Failure";

class CommonFailure extends Failure {
  constructor({ detail }) {
    super();
    this.detail = detail;
  }
}

export default CommonFailure;
