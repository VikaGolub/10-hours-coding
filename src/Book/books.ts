export type BookType = {
  id: number;
  imgLink: string;
  name: string;
  writer: string;
  prise: number;
  rating?: number;
};

export const listOfBooks: Array<BookType> = [
  {
    id: 1,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg",
    name: "Atomic Habits",
    writer: "James Clear",
    prise: 123.5,
  },
  {
    id: 2,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    name: "It Ends with Us: A Novel",
    writer: "Colleen Hoover",
    prise: 20.4,
  },
  {
    id: 3,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
    name: "Reminders of Him: A Novel",
    writer: "Colleen Hoover",
    prise: 34.5,
  },
  {
    id: 4,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg",
    name: "Atomic Habits",
    writer: "James Clear",
    prise: 123.5,
  },
  {
    id: 5,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    name: "It Ends with Us: A Novel",
    writer: "Colleen Hoover",
    prise: 20.4,
  },
  {
    id: 6,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
    name: "Reminders of Him: A Novel",
    writer: "Colleen Hoover",
    prise: 34.5,
  },
  {
    id: 7,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg",
    name: "Atomic Habits",
    writer: "James Clear",
    prise: 123.5,
  },
  {
    id: 8,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    name: "It Ends with Us: A Novel",
    writer: "Colleen Hoover",
    prise: 20.4,
  },
  {
    id: 9,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
    name: "Reminders of Him: A Novel",
    writer: "Colleen Hoover",
    prise: 34.5,
  },
];
