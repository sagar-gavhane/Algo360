const mutations = (arr) => {
  const firstString = arr[0].toLowerCase();
  const secondString = arr[1].toLowerCase();

  if (firstString.search((secondString))) {
    return true;
  }
  return false;
};

console.log(mutations(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
