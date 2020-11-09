import React, { Component } from 'react'
import { writeFile, utils } from 'xlsx'

class App extends Component {

  state = {
    open: false
  };

  makeXLS = () => {

    const jsonFile = {
      'sheet1': [
        { "nome": "gato", "categoria": "animal" },
        { "nome": "cachorro", "categoria": "animal" },
        { "nome": "porco", "categoria": "animal" },
        { "nome": "galinha", "categoria": "animal" },
        { "nome": "pato", "categoria": "animal" },
        { "nome": "raposa", "categoria": "animal" },
        { "nome": "cobra", "categoria": "animal" },
      ]
    }

    const sheet = utils.json_to_sheet(jsonFile.sheet1)
    const workbook = utils.book_new()
    utils.book_append_sheet(workbook, sheet, 'animais')

    writeFile(workbook, 'animais.xlsx')

  }

  render() {
    return (
      <div>
        <button onClick={this.makeXLS}> Gerar Planilha </button>
      </div>
    )
  }

}

export default App;