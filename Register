// SPDX-License-Identifier: MIT
pragma solidity 0.7.1;
pragma experimental ABIEncoderV2;
contract Registro{
    struct register {
        uint256 idUser;
        
        uint cedula;
        string nombreUser;
        string apellidoUser;
        string curso;
        string Tarjeta;
        address count;
        string clave;

    }
    
    uint256 public id;
    uint256[] public list;
    
    
    address usuario;
    mapping(address => register) estudiantes;
    
     /*modifier UsuarioAdmin{
        //require(msg.sender == usuario, "Tu no eres el principal");
        _;
    }*/
    
    constructor(){
        usuario = msg.sender;
    }
    
    function addNewUser(
        
        uint _cedula,
        string memory _nombreUser,
        string memory _apellidoUser,
        string memory _curso,
        string memory _tarjeta,
        address _count,
        string memory _clave
        
        )public {
        
        id = list.length;
        
        estudiantes[_count].idUser = id;
        estudiantes[_count].cedula = _cedula;
        estudiantes[_count].nombreUser = _nombreUser;
        estudiantes[_count].apellidoUser = _apellidoUser;
        estudiantes[_count].curso = _curso;
        estudiantes[_count].Tarjeta = _tarjeta;
        estudiantes[_count].count = _count;
        estudiantes[_count].clave = _clave;
    }
    
    function getInfoUser(address count)public view returns(uint, string memory, string memory, string memory, string memory){
        register storage tmp = estudiantes[count];
        return (tmp.cedula, tmp.nombreUser, tmp.apellidoUser, tmp.curso, tmp.Tarjeta);
        }
    
        
}
