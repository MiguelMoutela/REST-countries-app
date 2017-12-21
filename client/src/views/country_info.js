const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {
  const li = createElement(country.name, country.capital)
  this.ul.appendChild(li);
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
