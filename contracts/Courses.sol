pragma solidity >=0.4.21 <0.6.0;


contract Courses {
  constructor() public {
    setInstructor(msg.sender,24,"Taylor","McNeil");
  }

  struct Instructor{
    uint age;
    string fName;
    string lName;
  }

  mapping (address => Instructor) instructors;
  address[] public instructorAccts;

function setInstructor(address _address, uint _age, string memory _fName, string memory _lName) public{
    //var instructor = instructors[_address];


    instructors[_address].age = _age;
    instructors[_address].fName = _fName;
    instructors[_address].lName= _lName;

    instructorAccts.push(_address) -1;
}

function getInstructors() view public returns (address[] memory){
    return instructorAccts;
}

function getInstructor(address ins) view public returns (uint, string memory, string memory){
    return (instructors[ins].age, instructors[ins].fName, instructors[ins].lName);
}

function countInstructors() view public returns (uint){
    return instructorAccts.length;
}





}
