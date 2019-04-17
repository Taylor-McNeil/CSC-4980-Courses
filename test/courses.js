var Courses = artifacts.require('./Courses.sol');

 contract('Courses', function(accounts) {
  it("should assert true", function(done) {
    var courses = Courses.deployed();
    assert.isTrue(true);
    done();
  });
});


/*    contract('Courses', function(accounts){

    let CoursesInstance;

    beforeEach(async () => {
      CoursesInstance= await Courses.new();
  })

    it("should assert true", function(done) {
        assert.isTrue(true);
        done();
    });


    it("Assign Instructors", async function(){


    const teacher = await CoursesInstance.setInstructor(DeployedAddresses.Courses,24,"Taylor","McNeil");
    assert.equal(teacher.age,24,"teacher age set incorrectly");
    assert.equal(teacher.fName,"Taylor","teacher fName set incorrectly");
    assert.isTrue(teacher.lName==="McNeil","teacher lName set incorrectly");
    });


    }); */
 /*   const Courses = artifacts.require('Courses');
    let CoursesInstance;


    beforeEach(async () => {
        CoursesInstance=await Courses.new();
    })


    contract('Courses',accounts => {
        const teacher = accounts[0];

it("Assign Instructors",async function(){
    //const contract = await Courses.deployed();
    var One = await CoursesInstance.setInstructor(teacher,24,"Taylor","McNeil");
    assert.equal(One.age,24,"teacher age not set correctly");
});

    }); */

