// ****************************Make Table with the help of 2D Array******************************
var arr = [
  ["Samsung", "Galaxy", 64, 15000],
  ["Nokia", "S730", 128, 22000],
  ["Xiaomi", "Note", 32, 12000],
  ["Motoroala", "G10", 32, 15000],
  ["Apple", "S12", 64, 25000],
];

document.write(
  "<table border = 1px> "
);
document.write("<thead> <tr>");
document.write("<th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th>");
for (var a = 0; a < arr.length; a++) {
  document.write("<tr>");
  for (var b = 0; b < arr[a].length; b++) {
    document.write("<td>" + arr[a][b] + "</td>");
  }
  document.write("</tr>");
}
document.write("</tr> </thead>");
document.write("</table>");

