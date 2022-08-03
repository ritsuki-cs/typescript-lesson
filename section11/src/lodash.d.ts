import _ from 'lodash';
declare module 'lodash' {
  interface LodashStatic {
    hello: string;
  }
}