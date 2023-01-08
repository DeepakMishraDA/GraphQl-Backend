import { mockData }  from "../database/mockData";

var strings = mockData();
//console.log(numr)
export const resolver = () => {
   return {
    Query: {
      strings: () => strings,
    },
  }
}