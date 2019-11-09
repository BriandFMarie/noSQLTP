// describe("Services: User", () => {
//     let User, UserController, usersCollection;
//
//     describe("Testing all methods for users queries", () => {
//         let userModel1, userModel2;
//
//         before(() => {
//             // Imports UserModel and UserController
//             User = require('../../../src/models/User');
//             UserController = require('../../../src/services/UserServices');
//         });
//
//         beforeEach(() => {
//             userModel1 = new User({
//                 _id: "1",
//                 firstName: "Toto",
//                 lastName: "Azerty",
//                 age: 25,
//                 gender: "F",
//                 occupation: "some occupation",
//                 isPlayer: false
//             });
//
//             userModel2 = new User({
//                 _id: "2",
//                 firstName: "Titi",
//                 lastName: "Azerty",
//                 age: 38,
//                 gender: "F",
//                 occupation: "some occupation",
//                 isPlayer: true
//             });
//         });
//
//         describe("getAllUsers function", () => {
//
//             it("should called User.find function", () => {
//                 // To spy function for tests
//                 let getAllUsersSpy = sinon.spy(UserController, 'getAllUsers');
//                 let UserFindSpy = sinon.spy(User, 'find');
//
//                 getAllUsersSpy();
//
//                 expect(UserFindSpy).to.have.been.calledOnce;
//
//                 getAllUsersSpy.resetHistory();
//                 UserFindSpy.resetHistory();
//             });
//
//             it("should successfully find all users", () => {
//                 User.find()
//                     .then(users => expect(users.length).to.equals(2));
//             });
//         });
//
//         describe("getUser function", () => {
//
//             it("should called User.findById function", () => {
//                 // To spy function for tests
//                 let getUserSpy = sinon.spy(UserController, 'getUser');
//                 let userFindByIdSpy = sinon.spy(User, 'findById');
//
//                 getUserSpy();
//
//                 expect(userFindByIdSpy).to.have.been.calledOnce;
//
//                 getUserSpy.resetHistory();
//                 userFindByIdSpy.resetHistory();
//             });
//
//             it("should successfully find user with id", () => {
//                 let req = {
//                     params: {
//                         userId: "1"
//                     }
//                 };
//                 User.findById("1")
//                     .then(user => {
//                         expect(user.length).to.equals(1);
//                         expect(user.name).to.equals("Toto");
//                     });
//             });
//         });
//     });
// });
