var Eta = require('../dist/eta.cjs')

var template = `
<%=it.value%>

Partial
-------
<%~ include('template1', {name: 'Ben'})%>
`

Eta.templates.define('template1', Eta.compile('Hi <%=it.name%>'))
console.log(Eta.parse(template, Eta.defaultConfig))
console.log('===========================')
console.log(Eta.compile(template, Eta.defaultConfig).toString())
console.log('===========================')
console.log(Eta.render(template, { value: '<img>Something</img>' }))
