'use strict';

function FriendsSet() {
  var arr = [ ];
  arr.push.apply(arr, arguments);
  arr.__proto__ = FriendsSet.prototype;
  return arr;
}
FriendsSet.prototype = new Array;
FriendsSet.prototype.getFriendById = function(id) {
  var friendFound;

  this.forEach(function(friend) {
    if (friend['id'] == id) {
      friendFound = friend;
    }
  });

  return friendFound;
};
FriendsSet.prototype.getFriends = function(id) {
  var friends = [],
      friend  = this.getFriendById(id),
      _this   = this;

  if (friend == undefined) return null;
  if (friend.friends === null) return [];

  friend.friends.forEach(function (friendId) {
     friends.push(_this.getFriendById(friendId));
  });

  return friends;
};

var people = FriendsSet(
  {id: 1, name: 'Brad', friends: [2,5,6]},
  {id: 2, name: 'John', friends: [1, 3]},
  {id: 3, name: 'Tom',  friends: [2, 5]},
  {id: 4, name: 'Fil',  friends: null},
  {id: 5, name: 'John', friends: [1, 3]},
  {id: 6, name: 'Jim',  friends: [1]}
),
    anArray = new Array();

console.log("John's firends:\n", people.getFriends(2));
console.log("Fil's friends:", people.getFriends(4));

if (anArray.getFriends == undefined) {
  console.log("No Arrays are harmed!");
}
