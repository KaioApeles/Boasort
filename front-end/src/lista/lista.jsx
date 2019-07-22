import React, {Component, useState, useEffect} from 'react'
import './lista.css'

function List(){

  const [myList, setMyList] = useState([
    {id: 1 , nome: 'Kaio Nunes', equipe: 'Wilson', mandinga: 'Cubo Magico', boa: false},
    {id: 2 , nome: 'Chico Picole', equipe: 'Wilson', mandinga: 'Picole', boa: false},
    {id: 3 , nome: 'Magaiver Brasileiro', equipe: 'Wilson', mandinga: 'Clips', boa: false}
  ])

const drawTB = () => {
  return (
    <div className='div-lista'>  
      <h2><i className="fa fa-user" aria-hidden="true"></i> Lista de Participantes</h2>    
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Nome</th>
            <th scope='col'>Equipe</th>
            <th scope='col'>Mandinga</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>
          { myList.map( list => (
            <tr>
              <td scope='col'>{list.nome}</td>
              <td>{list.equipe}</td>
              <td>{list.mandinga}</td>
              <td><button className='btn btn-danger btn-lg' ><i className={'fa fa-trash-o'}></i></button></td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

  return(
    <>
    {drawTB()}
    </>
  )
}


export default List