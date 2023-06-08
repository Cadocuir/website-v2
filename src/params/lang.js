/**
 * @param {string} param
 */

let getValidLangs = ['fr','en','es']
export function match(param){


   let valid = RegExp('^[a-z]{2}$').test(param)
   if(!valid)
      return false
   
   if(!getValidLangs.includes(param))
      return false

   return valid
}