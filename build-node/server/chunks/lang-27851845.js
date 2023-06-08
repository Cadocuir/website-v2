let getValidLangs = ["fr", "en", "es"];
function match(param) {
  let valid = RegExp("^[a-z]{2}$").test(param);
  if (!valid)
    return false;
  if (!getValidLangs.includes(param))
    return false;
  return valid;
}

export { match };
//# sourceMappingURL=lang-27851845.js.map
