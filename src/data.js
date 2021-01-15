import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Hidden Structure",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      artist: "Leavv, Flitz&Suppe",
      id: uuidv4(),
      active: true,
      color: ["#86b58e", "#db9467"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
    },
    {
      name: "Zenith",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      artist: "Leavv",
      id: uuidv4(),
      active: false,
      color: ["#86b58e", "#db9467"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9927",
    },
    {
      name: "With Time",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      artist: "Leavv, The Field Tapes",
      id: uuidv4(),
      active: false,
      color: ["#86b58e", "#db9467"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9919",
    },
  ];
}

export default chillHop;
