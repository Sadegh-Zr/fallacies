import DOMPurify from "dompurify";
import parse from 'html-react-parser';

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

const getRandomItemsFromArray = (array, numberOfItems) => {
  const result = new Array(numberOfItems);
  let length = array.length;
  const taken = new Array(length)
  if (numberOfItems > length) {
    throw new RangeError("getRandom: more elements taken than available");
  }
  while (numberOfItems--) {
      const x = Math.floor(Math.random() * length);
      result[numberOfItems] = array[x in taken ? taken[x] : x];
      taken[x] = --length in taken ? taken[length] : length;
  }
  return result;
};

const toFarsiNumber = number => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number
      .toString()
      .replace(/\d/g, x => farsiDigits[x]);
};

const getAllSiblings = element => {
  const children = [...element.parentElement.children];
  return children.filter(child => child !== element);
}

const parseHTML = html => parse(DOMPurify.sanitize(html));

const isBrowser = typeof window !== "undefined";

const isInRange = (number, range) => ((number >= range.start) && (number <= range.end));

const updateBrowserColor = color => {
  document.querySelector('meta[name="theme-color"]').setAttribute('content',  color);
}

export { shuffle, getRandomItemsFromArray, toFarsiNumber, getAllSiblings, parseHTML, isBrowser, isInRange, updateBrowserColor };
