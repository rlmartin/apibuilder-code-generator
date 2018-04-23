const assert = require('assert')
const impl = require('../../../../main/js/handlers/{{toSnakeCase type}}/impl')

describe('{{toSnakeCase type}}.impl', () => {

{{#each operations}}
  describe('{{toMethodName method}}', () => {
    it('should work', () => {
      impl.{{toMethodName method}}(
        {},
        {},
        (err, data) => {
          assert(data.statusCode >= 200 && data.statusCode <= 299)
        }
      )
    })
  })

{{/each}}
})