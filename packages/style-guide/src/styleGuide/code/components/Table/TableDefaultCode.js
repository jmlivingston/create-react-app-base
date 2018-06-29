const TableDefaultCode = `import React, { PureComponent, Fragment } from 'react'

import { Table } from 'components/Common'

class TableDefault extends PureComponent {
  basicData = [
    { id: 1, firstName: 'Jackquelin', lastName: 'Headley', email: 'jheadley0@typepad.com', gender: 'Female' },
    { id: 2, firstName: 'Ray', lastName: 'Hundell', email: 'rhundell1@dion.ne.jp', gender: 'Female' },
    { id: 3, firstName: 'Harmony', lastName: 'Pickworth', email: 'hpickworth2@com.com', gender: 'Female' },
    { id: 4, firstName: 'Roth', lastName: 'Kalf', email: 'rkalf3@nhs.uk', gender: 'Male' },
    { id: 5, firstName: 'Di', lastName: 'Mariette', email: 'dmariette4@irs.gov', gender: 'Female' },
    { id: 6, firstName: 'Oralla', lastName: 'Toffoloni', email: 'otoffoloni5@senate.gov', gender: 'Female' },
    { id: 7, firstName: 'Abby', lastName: 'Viegas', email: 'aviegas6@etsy.com', gender: 'Male' },
    { id: 8, firstName: 'Bendicty', lastName: 'Northgraves', email: 'bnorthgraves7@statcounter.com', gender: 'Male' },
    { id: 9, firstName: 'Tim', lastName: 'Thaxton', email: 'tthaxton8@theatlantic.com', gender: 'Female' },
    { id: 10, firstName: 'Aloin', lastName: 'Yakubov', email: 'ayakubov9@photobucket.com', gender: 'Male' },
    { id: 11, firstName: 'Marion', lastName: 'Beeston', email: 'mbeestona@redcross.org', gender: 'Female' },
    { id: 12, firstName: 'Janenna', lastName: 'Aronoff', email: 'jaronoffb@howstuffworks.com', gender: 'Female' },
    { id: 13, firstName: 'Almeria', lastName: 'Glayzer', email: 'aglayzerc@nyu.edu', gender: 'Female' },
    { id: 14, firstName: 'Claus', lastName: 'Hilling', email: 'chillingd@typepad.com', gender: 'Male' },
    { id: 15, firstName: 'Audi', lastName: 'Mackley', email: 'amackleye@meetup.com', gender: 'Female' },
    { id: 16, firstName: 'Gisele', lastName: 'McMillian', email: 'gmcmillianf@nature.com', gender: 'Female' },
    { id: 17, firstName: 'Arlina', lastName: 'Youdell', email: 'ayoudellg@miibeian.gov.cn', gender: 'Female' },
    { id: 18, firstName: 'Dennie', lastName: 'McIlhatton', email: 'dmcilhattonh@51.la', gender: 'Male' },
    { id: 19, firstName: 'Hendrik', lastName: 'Royce', email: 'hroycei@blogtalkradio.com', gender: 'Male' },
    { id: 20, firstName: 'Donavon', lastName: 'Rickhuss', email: 'drickhussj@businesswire.com', gender: 'Male' }
  ]

  columns = Object.keys(this.basicData[0]).map(b => ({
    Header: b.toUpperCase(),
    accessor: b
  }))
  render() {
    return (
      <Fragment>
        <h3>
          This component is entirely based on{' '}
          <a href="https://react-table.js.org" target="_blank" rel="noopener noreferrer">
            react-table
          </a>. Follow link for detailed documentation.
        </h3>
        <Table data={this.basicData} columns={this.columns} defaultPageSize={10} />
      </Fragment>
    )
  }
}

export default TableDefault
`

export default TableDefaultCode
