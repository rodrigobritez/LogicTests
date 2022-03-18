// You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.
// It must return the display text as shown in the examples:

function likes(names) {
  var s = "";
  var a = 0;

  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return names[0] + " likes this";
  } else if (names.length === 2 || names.length === 3) {
    while (a < names.length) {
      if (s === "") {
        s += names[a];
      } else {
        a === names.length - 1
          ? (s += " and " + names[a])
          : (s += ", " + names[a]);
      }
      a++;
    }
    s += " like this";
  } else {
    s +=
      names[a] +
      ", " +
      names[a + 1] +
      " and " +
      (names.length - 2).toString() +
      " others like this";
  }

  return s;
}

//BEST RESPONSE

function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}
