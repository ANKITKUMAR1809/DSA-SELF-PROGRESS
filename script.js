const text = "/yl https://madxapi-d0cbf6ac738c.herokuapp.com/272f381b-40bd-4c80-be95-8db99a226f14/master.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NDAxMjQ1NzQuMjA0LCJkYXRhIjp7Il9pZCI6IjY2NDU5ZTllODJmZmM3YzllYjMzY2FjNyIsInVzZXJuYW1lIjoiODI5ODA1NTY4OSIsImZpcnN0TmFtZSI6Ik5pa2hpbCIsImxhc3ROYW1lIjoiUmFqIiwib3JnYW5pemF0aW9uIjp7Il9pZCI6IjVlYjM5M2VlOTVmYWI3NDY4YTc5ZDE4OSIsIndlYnNpdGUiOiJwaHlzaWNzd2FsbGFoLmNvbSIsIm5hbWUiOiJQaHlzaWNzd2FsbGFoIn0sInJvbGVzIjpbIjViMjdiZDk2NTg0MmY5NTBhNzc4YzZlZiJdLCJjb3VudHJ5R3JvdXAiOiJJTiIsInR5cGUiOiJVU0VSIn0sImlhdCI6MTczOTUxOTc3NH0.etjDCEhoOw6u6o145uZ6IKUBikuzRu6I97AB4A5ryV4 -n Shikshan Kala for Bihar STET 2024 | Art of Teaching for BSTET 2024 (9-10) (11-12) | Deepak Himanshu - by @ASMultiverseAppZ -t https://i.ytimg.com/vi/Vim6ly1x05k/mqdefault.jpg";
const copiedSplitter = (text) => {

    const array = [];
    let start = text.search("/yl ");
    let end = text.search(" -n");
    array.push(text.slice(start + 4, end));
    let start1 = text.search("-n");
    let end1 = text.search(" -t");
    array.push(text.slice(start1 + 3, end1));
    let start2 = text.search("-t");
    let end2 = text.length;
    array.push(text.slice(start2 + 3));
    return array;
}
console.log(copiedSplitter(text));